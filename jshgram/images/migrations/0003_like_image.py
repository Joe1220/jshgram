# Generated by Django 2.0.6 on 2018-06-09 15:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0002_auto_20180607_0108'),
    ]

    operations = [
        migrations.AddField(
            model_name='like',
            name='image',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='images.Image'),
        ),
    ]
