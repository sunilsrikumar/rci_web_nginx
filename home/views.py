from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from .form import inquiryForm

def mail(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = inquiryForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            subject = form.cleaned_data['inquiryName']
            message = form.cleaned_data['inquiryEmail']


            print("Form daytaaaaaaaaaaaaaaaaaaaajjjj:  ",subject, message)
            #recipients = ['info@example.com']

            #send_mail(subject, message, sender, recipients)
            return HttpResponseRedirect('/thanks/')
    else:
        form = inquiryForm()

    return render(request, 'home_page.html', {'form': form})