# Generated by Django 4.1 on 2022-11-25 11:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='card',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.client'),
        ),
        migrations.AddField(
            model_name='bankstatement',
            name='account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.client'),
        ),
        migrations.AddField(
            model_name='address',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.client'),
        ),
        migrations.AddField(
            model_name='account',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='core.client'),
        ),
    ]
