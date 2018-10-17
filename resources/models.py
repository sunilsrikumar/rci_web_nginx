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



class ResourcesIndexPage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    indexheading=models.CharField(max_length=255, blank=True)
    intro = models.CharField(max_length=255, blank=True)


    content_panels = Page.content_panels + [

        FieldPanel('indexheading'),
        FieldPanel('intro'),
    ]

class ResourcesFeaturedProjectsPage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    heading = models.CharField(max_length=255, blank=True)
    intro = models.CharField(max_length=255, blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    search_fields = Page.search_fields + [
        index.SearchField('heading'),

    ]

    resourcesNav1=models.CharField(max_length=255, blank=True)
    resourcesNav2=models.CharField(max_length=255, blank=True)
    resourcesNav3=models.CharField(max_length=255, blank=True)
    resourcesNav4=models.CharField(max_length=255, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
        ImageChooserPanel('image'),
        FieldPanel('resourcesNav1'),
        FieldPanel('resourcesNav2'),
        FieldPanel('resourcesNav3'),
        FieldPanel('resourcesNav4'),
        InlinePanel('featured_projects_gallary', label="Featured Projects Gallary"),


    ]


class FeaturedProjectsGallary(Orderable):
    page = ParentalKey(ResourcesFeaturedProjectsPage, on_delete=models.CASCADE, related_name='featured_projects_gallary')
    heading = models.CharField(max_length=255, blank=True)
    subheading = models.CharField(max_length=255, blank=True)
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
        FieldPanel('heading'),
        FieldPanel('subheading'),
        FieldPanel('embed_url'),
    ]



