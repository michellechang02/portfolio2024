from django.db import models

# Create your models here.
class TextSummary(models.Model):
    inputtedText= models.TextField()
    summarizedText = models.TextField()

    
