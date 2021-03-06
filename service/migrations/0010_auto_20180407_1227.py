# Generated by Django 2.0.3 on 2018-04-07 12:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailredirects', '0005_capitalizeverbose'),
        ('wagtailcore', '0040_page_draft_title'),
        ('wagtailforms', '0003_capitalizeverbose'),
        ('service', '0009_auto_20180406_1518'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='featureitem',
            name='image',
        ),
        migrations.RemoveField(
            model_name='featureitem',
            name='page',
        ),
        migrations.RemoveField(
            model_name='mobileapppage',
            name='logo_image',
        ),
        migrations.RemoveField(
            model_name='mobileapppage',
            name='page_ptr',
        ),
        migrations.RemoveField(
            model_name='serviceitem',
            name='image',
        ),
        migrations.RemoveField(
            model_name='serviceitem',
            name='page',
        ),
        migrations.DeleteModel(
            name='FeatureItem',
        ),
        migrations.DeleteModel(
            name='MobileAppPage',
        ),
        migrations.DeleteModel(
            name='ServiceItem',
        ),
    ]
