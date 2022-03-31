from django.db import models


# Create your models here.

class Departments(models.Model):
    Sr_No = models.IntegerField(primary_key=True)
    EstateOfficeCode = models.CharField(max_length=50)
    UrbanEstateCode = models.CharField(max_length=50)
    UrbanEstateName = models.CharField(max_length=50)
    Address1 = models.CharField(max_length=50)
    Address2 = models.CharField(max_length=50)
    Address3 = models.CharField(max_length=50)
    State = models.CharField(max_length=50)
    PIN = models.CharField(max_length=50)
    ZonePotential = models.CharField(max_length=50)
    DateFrom = models.CharField(max_length=50)
    DateTo = models.CharField(max_length=50)
    CreatedBy = models.CharField(max_length=50)
    CreatedDate = models.CharField(max_length=50)
    ModifiedBy = models.CharField(max_length=50)
    ModifiedDate = models.CharField(max_length=50)
