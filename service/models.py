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



class ServiceIndexPage(Page):
    intro = models.TextField(null=True ,blank=True)
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    why_us = models.CharField(default="Why us ?",max_length=255, blank=True)

    content_panels = Page.content_panels + [

        FieldPanel('intro'),
        FieldPanel('why_us'),
        InlinePanel('service_index_items', label="Service Index Items"),

    ]

class ServiceIndexItems(Orderable):
    page = ParentalKey(ServiceIndexPage, on_delete=models.CASCADE, related_name='service_index_items')
    heading1 = models.CharField(max_length=255, blank=True)
    heading2 = models.CharField(max_length=255, blank=True)

    panels = [
        FieldPanel('heading1'),
        FieldPanel('heading2'),

    ]


class ServicePage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    service_name = models.CharField(max_length=255, blank=True)
    service_heading = models.CharField(max_length=255, blank=True)
    service_intro = models.TextField(null=True ,blank=True)
    innerpagesubhead=models.CharField(max_length=255,null=True,blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    page_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    search_fields = Page.search_fields + [

        index.SearchField('service_name'),
        index.SearchField('service_intro'),

    ]
    content_panels = Page.content_panels + [
        FieldPanel('service_name'),
        FieldPanel('service_heading'),
        ImageChooserPanel('image'),
        ImageChooserPanel('page_image'),
        InlinePanel('service_page_navigation', label="service_page_navigation"),
        FieldPanel('service_intro'),
        InlinePanel('service_page_items', label="Service Page Items"),
        FieldPanel('innerpagesubhead'),
        InlinePanel('service_page_mobility_industry', label="Service Page Mobility Industry"),
        InlinePanel('service_page_resources', label="Service Page Resources"),

    ]


class ServicePageNav(Orderable):
    page = ParentalKey(ServicePage, on_delete=models.CASCADE, related_name='service_page_navigation')
    nav_title = models.CharField(max_length=255, blank=True)
    embed_url = models.URLField("Embed URL", blank=True)
    panels = [
        FieldPanel('nav_title'),
        FieldPanel('embed_url'),
    ]

class ServicePageItems(Orderable):
    page = ParentalKey(ServicePage, on_delete=models.CASCADE, related_name='service_page_items')
    heading1 = models.CharField(max_length=255, blank=True)
    heading1_intro = models.TextField(null=True ,blank=True)
    heading2 = models.CharField(max_length=255, blank=True)
    heading2_intro = models.TextField(null=True ,blank=True)
    panels = [
        FieldPanel('heading1'),
        FieldPanel('heading1_intro'),
        FieldPanel('heading2'),
        FieldPanel('heading2_intro'),
    ]


class ServicePageMobilityIndustry(Orderable):
    page = ParentalKey(ServicePage, on_delete=models.CASCADE, related_name='service_page_mobility_industry')
    heading1 = models.CharField(max_length=255, blank=True)
    heading1_intro = models.TextField(null=True ,blank=True)
    embed_url1 = models.URLField("Embed URL", blank=True)
    url_title1 = models.CharField(max_length=255, blank=True)
    heading2 = models.CharField(max_length=255, blank=True)
    heading2_intro = models.TextField(null=True ,blank=True)
    embed_url2 = models.URLField("Embed URL", blank=True)
    url_title2 = models.CharField(max_length=255, blank=True)


    panels = [
        FieldPanel('heading1'),
        FieldPanel('heading1_intro'),
        FieldPanel('embed_url1'),
        FieldPanel('url_title1'),
        FieldPanel('heading2'),
        FieldPanel('heading2_intro'),
        FieldPanel('embed_url2'),
        FieldPanel('url_title2'),

    ]

class ServicePageResources(Orderable):
    page = ParentalKey(ServicePage, on_delete=models.CASCADE, related_name='service_page_resources')
    heading = models.CharField(max_length=255, blank=True)
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
        FieldPanel('embed_url'),
    ]


# ################################
# class MobileAppPage(Page):
#     mobile_app_name = models.CharField(max_length=255, blank=True)
#     mobile_app_intro = RichTextField(blank=True)
#     mobile_service_title = models.CharField(max_length=255, blank=True)
#     mobile_feature_title = models.CharField(max_length=255, blank=True)
#
#     logo_image = models.ForeignKey(
#         'wagtailimages.Image',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#
#     )
#
#     search_fields = Page.search_fields + [
#         index.SearchField('mobile_app_name'),
#         index.SearchField('mobile_app_intro'),
#
#     ]
#     content_panels = Page.content_panels + [
#         FieldPanel('mobile_app_name'),
#         ImageChooserPanel('logo_image'),
#         FieldPanel('mobile_app_intro', classname="full"),
#         FieldPanel('mobile_service_title'),
#         InlinePanel('service_item', label="Service Item"),
#         FieldPanel('mobile_feature_title'),
#         InlinePanel('feature_item', label="Feature Item"),
#
#     ]
#
#
#
# class ServiceItem(Orderable):
#     page = ParentalKey(MobileAppPage, on_delete=models.CASCADE, related_name='service_item')
#     service_title = models.CharField(max_length=255, blank=True)
#     service_intro = RichTextField(blank=True)
#     embed_url = models.URLField("Embed URL", blank=True)
#     image = models.ForeignKey(
#         'wagtailimages.Image',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#
#     )
#
#     panels = [
#         ImageChooserPanel('image'),
#         FieldPanel('service_title'),
#         FieldPanel('service_intro'),
#         FieldPanel('embed_url'),
#     ]
#
#
# class FeatureItem(Orderable):
#     page = ParentalKey(MobileAppPage, on_delete=models.CASCADE, related_name='feature_item')
#     feature_title = models.CharField(max_length=255, blank=True)
#     feature_intro = RichTextField(blank=True)
#     embed_url = models.URLField("Embed URL", blank=True)
#     image = models.ForeignKey(
#         'wagtailimages.Image',
#         null=True,
#         blank=True,
#         on_delete=models.SET_NULL,
#         related_name='+'
#
#     )
#
#     panels = [
#         ImageChooserPanel('image'),
#         FieldPanel('feature_title'),
#         FieldPanel('feature_intro'),
#         FieldPanel('embed_url'),
#     ]

