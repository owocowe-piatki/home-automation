# Generated by Django 3.1.2 on 2020-10-22 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="appliance",
            name="appliance_id",
            field=models.PositiveSmallIntegerField(verbose_name="Appliance ID"),
        ),
    ]