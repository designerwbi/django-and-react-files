from rest_framework import serializers
from EmployeeApp.models import Departments


class Departmentserailizer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = (
            'Sr_No', 'EstateOfficeCode', 'UrbanEstateCode', 'UrbanEstateName', 'Address1', 'Address2', 'Address3',
            'State',
            'PIN', 'ZonePotential', 'DateFrom', 'DateTo', 'CreatedBy', 'CreatedDate', 'ModifiedBy', 'ModifiedDate')
