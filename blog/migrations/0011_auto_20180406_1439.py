# Generated by Django 2.0.2 on 2018-04-06 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_bloglistpageimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bloglistpage',
            name='logo_image',
        ),
        migrations.RemoveField(
            model_name='blogmainpage',
            name='logo_image',
        ),
    ]
