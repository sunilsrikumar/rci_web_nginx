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




from wagtail.snippets.models import register_snippet

# A couple of abstract classes that contain commonly used fields



class HomePage(Page):
    body = RichTextField(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
        InlinePanel('carousel_images', label="Carousel images"),
        InlinePanel('feature_images', label=" Services Images"),
        InlinePanel('gallery_images', label="Partner or Client images"),
        InlinePanel('section_images', label="Videos and White paper images"),
        InlinePanel('section_blog_images', label="Section Blog images"),
        InlinePanel('section_case_study_images', label="Case Study images Section "),

    ]

# Carousel items

class CarouselItem(Orderable):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='carousel_images')
    caption = models.CharField(max_length=255, blank=True)
    tag_line = models.CharField(max_length=250,blank=True,null=True)
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
        FieldPanel('caption'),
        FieldPanel('tag_line'),
        FieldPanel('embed_url'),
    ]


class HomePageGalleryImage(Orderable):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='gallery_images')
    caption = models.CharField(blank=True,null=True, max_length=250)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('caption'),

    ]

class HomePageFeatureImage(Orderable):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='feature_images')
    header = models.CharField(blank=True,null=True, max_length=250)
    intro = models.CharField(blank=True,null=True, max_length=250)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    embed_url = models.URLField("Embed URL", blank=True)

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('header'),
        FieldPanel('intro'),
        FieldPanel('embed_url'),

    ]

class HomePageSectionImage(Orderable):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='section_images')
    caption = models.CharField(blank=True,null=True, max_length=250)
    intro = models.CharField(blank=True,null=True, max_length=250)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    embed_url = models.URLField("Embed URL", blank=True)


    panels = [
        ImageChooserPanel('image'),
        FieldPanel('caption'),
        FieldPanel('intro'),
        FieldPanel('embed_url'),

    ]


class HomePageSectionBlogImage(Orderable):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='section_blog_images')
    caption = models.CharField(blank=True,null=True, max_length=250)
    intro = models.CharField(blank=True,null=True, max_length=250)
    embed_url = models.URLField("Embed URL", blank=True)

    blog_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        ImageChooserPanel('blog_image'),
        FieldPanel('caption'),
        FieldPanel('intro'),
        FieldPanel('embed_url'),

    ]

class HomePageSectionCaseStudyImage(Orderable):
    page = ParentalKey(HomePage, on_delete=models.CASCADE, related_name='section_case_study_images')
    caption = models.CharField(blank=True,null=True, max_length=250)
    intro = models.CharField(blank=True,null=True, max_length=250)
    embed_url = models.URLField("Embed URL", blank=True)

    case_study_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        ImageChooserPanel('case_study_image'),
        FieldPanel('caption'),
        FieldPanel('intro'),
        FieldPanel('embed_url'),

    ]


