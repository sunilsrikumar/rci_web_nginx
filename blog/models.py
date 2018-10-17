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

#comment
class BlogListPage(Page):
    intro = RichTextField(blank=True)
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    content_panels = Page.content_panels + [
        FieldPanel('intro', classname="full"),
        InlinePanel('blog_list_page_image', label="Blog List Page Image"),

    ]

class BlogMainPage(Page):
    logo_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    author=models.CharField(max_length=250,blank=True,null=True)
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250,blank=True,null=True)
    body = RichTextField(blank=True)
    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [

        FieldPanel('author'),
        FieldPanel('date'),
        FieldPanel('intro'),
        FieldPanel('body', classname="full"),
        ImageChooserPanel('image'),
        InlinePanel('blog_page_image', label="Blog Page Image"),

    ]


class BlogPageImage(Orderable):
    page = ParentalKey(BlogMainPage, on_delete=models.CASCADE, related_name='blog_page_image')
    caption = models.CharField(blank=True,null=True, max_length=250)
    intro = models.CharField(blank=True,null=True, max_length=250)

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
    ]


class BlogListPageImage(Orderable):
    page = ParentalKey(BlogListPage, on_delete=models.CASCADE, related_name='blog_list_page_image')
    caption = models.CharField(blank=True,null=True, max_length=250)
    intro = models.CharField(blank=True,null=True, max_length=250)

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
    ]
