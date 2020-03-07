import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import {Routes, Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  map: Map;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([28.09973,-15.41343], 15);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

      var trash = [
        ["Trash can 1",28.120508,-15.4261907],
        ["Trash can 2",28.120509,-15.4261901],
        ["Trash can 3",28.120589,-15.4261961],
        ["Trash can 4",28.120889,-15.4262961],

        ];

        for (var i = 0; i < trash.length; i++) {
          marker([trash[i][1], trash[i][2]]).addTo(this.map)
      .bindPopup(trash[i][0])
      .openPopup();
        }

    }
}
