
from django import forms

class inquiryForm(forms.Form):
    inquiryName = forms.CharField(label='inquiryName', max_length=255)
    inquiryEmail = forms.EmailField(label='inquiryEmail', max_length=255)
    inquiryCompany = forms.CharField(label='inquiryCompany', max_length=255)
    inquiryPhoneNumber = forms.CharField(label='inquiryPhoneNumber', max_length=255)
    inquiryDescription = forms.CharField(label='inquiryDescription', max_length=255)
    inquiryTypeOfProject = forms.CharField(label='inquiryTypeOfProject', max_length=255)

