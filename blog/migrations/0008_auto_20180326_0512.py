# Generated by Django 2.0.2 on 2018-03-26 05:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailredirects', '0005_capitalizeverbose'),
        ('wagtailforms', '0003_capitalizeverbose'),
        ('wagtailimages', '0019_delete_filter'),
        ('wagtailcore', '0040_page_draft_title'),
        ('blog', '0007_auto_20180326_0500'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogindexpage',
            name='page_ptr',
        ),
        migrations.RemoveField(
            model_name='blogpage',
            name='image',
        ),
        migrations.RemoveField(
            model_name='blogpage',
            name='page_ptr',
        ),
        migrations.AddField(
            model_name='bloglistpage',
            name='logo_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='blogmainpage',
            name='logo_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.DeleteModel(
            name='BlogIndexPage',
        ),
        migrations.DeleteModel(
            name='BlogPage',
        ),
    ]
