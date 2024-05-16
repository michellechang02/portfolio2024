import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

function Projects(props) {


    return (
      <Table removeWrapper aria-label="Example static collection table" className="text-2xl mt-10 mx-auto max-w-[1000px]">
    <TableHeader>
        <TableColumn><div className="text-sm">COMPANY</div></TableColumn>
        <TableColumn><div className="text-sm">ROLE</div></TableColumn>
        <TableColumn><div className="text-sm">DETAILS</div></TableColumn>
    </TableHeader>
    <TableBody>
    <TableRow key="1">
        <TableCell><div className="text-base">Microsoft</div></TableCell>
        <TableCell><div className="text-base">Software Engineer</div></TableCell>
        <TableCell><div className="text-base">Viva Engage</div></TableCell>
    </TableRow>
    <TableRow key="2">
        <TableCell><div className="text-base">Penn Engineering</div></TableCell>
        <TableCell><div className="text-base">CIS 3500 Teaching Assistant</div></TableCell>
        <TableCell><div className="text-base">Teaching students software engineering (MERN stack)</div></TableCell>
    </TableRow>
    <TableRow key="3">
        <TableCell><div className="text-base">Qualcomm</div></TableCell>
        <TableCell><div className="text-base">Software Engineer</div></TableCell>
        <TableCell><div className="text-base">Automated machine learning pipelines (MLOps)</div></TableCell>
    </TableRow>
    <TableRow key="4">
        <TableCell><div className="text-base">Penn Engineering</div></TableCell>
        <TableCell><div className="text-base">CIS 2400 Teaching Assistant</div></TableCell>
        <TableCell><div className="text-base">Teaching students C and pointers</div></TableCell>
    </TableRow>
    <TableRow key="5">
        <TableCell><div className="text-base">Penn Medicine</div></TableCell>
        <TableCell><div className="text-base">Summer Research Assistant</div></TableCell>
        <TableCell><div className="text-base">Full-Stack Web Application to Visualize Brain Imaging Data in 3D</div></TableCell>
    </TableRow>
</TableBody>

</Table>

    );
}

export default Projects;