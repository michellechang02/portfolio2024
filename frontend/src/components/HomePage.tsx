import * as THREE from "three";
import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier";


const baubleMaterial = new THREE.MeshLambertMaterial({ color: "#c0a0a0", emissive: "pink" });
const capMaterial = new THREE.MeshStandardMaterial({ metalness: 0.75, roughness: 0.15, color: "#8a492f", emissive: "#600000", envMapIntensity: 20 });
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const baubles = [...Array(50)].map(() => ({ scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)] }));

interface BaubleProps {
  vec?: THREE.Vector3;
  scale: number;
  r?: (min: number, max?: number) => number;
}

interface GLTFResult {
  nodes: {
    Mesh_1: THREE.Mesh;
  };
}

function Bauble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }: BaubleProps) {
  const { nodes } = useGLTF("/cap.glb") as unknown as GLTFResult;

  const api = useRef<any>();
  useFrame((_, delta) => {
    delta = Math.min(0.1, delta);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale })
    );
  });
  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
      <mesh castShadow scale={2.5 * scale} position={[0, 0, -1.8 * scale]} geometry={nodes.Mesh_1.geometry}  material={capMaterial} />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>();
  useFrame(({ mouse, viewport }) => {
    vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2);
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((currentCountdown) => {
        if (currentCountdown === 1) {
          setLoading(false);
          clearInterval(interval);
          return currentCountdown;
        }
        return currentCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Suspense fallback={null}>
        <Canvas
          style={{
            backgroundColor: "white",
            width: "100vw",
            height: "100vh",
          }}
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 2)}
        >
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, 0]} intensity={4} color="pink" />
          <Physics gravity={[0, 0, 0]}>
            <Pointer />
            {baubles.map((props, i) => (
              <Bauble key={i} {...props} />
            ))}
          </Physics>
          <Environment files="/adamsbridge.hdr" />
          <EffectComposer>
            <N8AO color="pink" aoRadius={2} intensity={1} />
          </EffectComposer>
        </Canvas>
      </Suspense>
      {!loading ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "100px",
            pointerEvents: "none",
          }}
        >
          Michelle Minji Chang
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "100px",
            pointerEvents: "none",
          }}
        >
          {countdown === 4 ? "Ready?" : countdown}
        </div>
      )}
    </div>
  );
};

export default HomePage;
