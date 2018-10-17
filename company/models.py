from __future__ import unicode_literals
from django.shortcuts import render
from django.db import models
import json
from django.conf import settings
from django.core.serializers.json import DjangoJSONEncoder

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.admin.edit_handlers import (
    FieldPanel,
    FieldRowPanel,
    InlinePanel,
    MultiFieldPanel,
    PageChooserPanel,
    StreamFieldPanel,
)
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core.models import Collection, Page,Orderable
from wagtail.contrib.forms.models import AbstractEmailForm, AbstractFormField, AbstractFormSubmission
from wagtail.contrib.forms.edit_handlers import FormSubmissionsPanel

from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.search import index



class CompanyIndexPage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro', classname="full"),
    ]

class CompanyCareersPage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    name = models.CharField(max_length=255, blank=True)
    intro = RichTextField(blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    career_page_heading=models.CharField(max_length=255, blank=True)
    career_page_subheading = models.CharField(max_length=255, blank=True)
    career_intro=models.TextField(null=True, blank=True)
    career_checklist_header=models.CharField(max_length=255, blank=True)

    testimonial_title = models.CharField(max_length=255, blank=True)
    career_opening_url = models.URLField("career_opening_url", blank=True)
    search_fields = Page.search_fields + [
        index.SearchField('name'),
        index.SearchField('intro'),

    ]
    content_panels = Page.content_panels + [
        FieldPanel('name'),
        FieldPanel('intro', classname="full"),
        FieldPanel('career_page_heading'),
        FieldPanel('career_page_subheading'),
        FieldPanel('career_intro'),
        ImageChooserPanel('image'),
        InlinePanel('career_work_culture', label="Career Work Culture"),
        InlinePanel('career_block', label="Career Block"),
        FieldPanel('career_checklist_header'),
        InlinePanel('checklist', label="career_checklist"),
        FieldPanel('testimonial_title'),
        InlinePanel('testimonial', label="Testimonial"),
        FieldPanel('career_opening_url'),
    ]



class CareerWorkCulture(Orderable):
    page = ParentalKey(CompanyCareersPage, on_delete=models.CASCADE, related_name='career_work_culture')
    block_title = models.CharField(max_length=255, blank=True)
    block_intro = models.TextField(null=True, blank=True)
    embed_url = models.URLField("Embed URL", blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'

    )

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('block_title'),
        FieldPanel('block_intro'),
        FieldPanel('embed_url'),
    ]

class Careerblock(Orderable):
    page = ParentalKey(CompanyCareersPage, on_delete=models.CASCADE, related_name='career_block')
    block_title = models.CharField(max_length=255, blank=True)
    block_intro = models.TextField(null=True, blank=True)
    embed_url = models.URLField("Embed URL", blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'

    )

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('block_title'),
        FieldPanel('block_intro'),
        FieldPanel('embed_url'),
    ]

class Checklist(Orderable):
    page = ParentalKey(CompanyCareersPage, on_delete=models.CASCADE, related_name='checklist')
    checklist = models.CharField(max_length=255, blank=True)

    panels = [
        FieldPanel('checklist'),

    ]

class Testimonial(Orderable):
    page = ParentalKey(CompanyCareersPage, on_delete=models.CASCADE, related_name='testimonial')
    intro = models.TextField(null=True, blank=True)
    client_name= models.CharField(max_length=255, blank=True)
    client_desinatiion = models.CharField(max_length=255, blank=True)


    panels = [
        FieldPanel('intro'),
        FieldPanel('client_name'),
        FieldPanel('client_desinatiion'),
    ]

#################################Career openning page###############################################

class CareerOpeningPage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    career_heading = models.CharField(max_length=255, blank=True)
    intro = models.TextField(null=True, blank=True)
    front_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )



    search_fields = Page.search_fields + [
        index.SearchField('career_heading'),
        index.SearchField('intro'),

    ]
    content_panels = Page.content_panels + [
        ImageChooserPanel('front_image'),
        FieldPanel('career_heading'),
        FieldPanel('intro', classname="full"),
        InlinePanel('job', label="job"),
    ]

class Job(Orderable):
    page = ParentalKey(CareerOpeningPage, on_delete=models.CASCADE, related_name='job')
    job_title = models.CharField(max_length=255, blank=True)
    job_sub_title= models.CharField(max_length=255, blank=True)
    experience = models.CharField(max_length=255, blank=True)
    description=models.TextField(max_length=255, blank=True)
    responsibilities=models.TextField(max_length=255, blank=True)
    requirements=models.TextField(max_length=255, blank=True)

    panels = [
        FieldPanel('job_title'),
        FieldPanel('job_sub_title'),
        FieldPanel('experience'),
        FieldPanel('description'),
        FieldPanel('responsibilities'),
        FieldPanel('requirements'),

    ]
