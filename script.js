(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_807F782A_8E23_A905_41DE_623121285A09",
  "this.Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "this.Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "this.Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "width": "100%",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "overflow": "visible",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Player",
 "minHeight": 20,
 "verticalAlign": "top",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.89,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B61421BD_A292_F69E_41DE_8F02CAF39961"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_B2365212_A292_D56A_41E0_151EE8227148_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.42,
  "pitch": -6.57,
  "hfov": 100
 },
 "id": "panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.18,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B1073137_A292_F7AA_41D7_2380060CFB07"
},
{
 "thumbnailUrl": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_t.jpg",
 "partial": false,
 "label": "14. cocina  - M+M - copia copy",
 "id": "panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_ACF7AB9D_A27E_6A9E_41DC_E7158FDF4749"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.7,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B696018E_A292_F77A_41DA_EDF75FC236BB"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_camera"
},
{
 "initialSequence": "this.sequence_B14C0168_A292_F7A6_41E0_37DB04B1FC96",
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B14C1168_A292_F7A6_41D0_A7655F9D4686"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.72,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B1742183_A292_F76A_41C2_7F57ED1FFDA9"
},
{
 "thumbnailUrl": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_t.jpg",
 "partial": false,
 "label": "13.SALON TV  - M+M copy",
 "id": "panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AFD396F4_A271_BAAE_41DE_86672900A5A5"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_t.jpg",
 "partial": false,
 "label": "11. BA\u00d1O HAB 2  - M+M copy",
 "id": "panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AF8BEB0B_A272_AB7A_41DE_7AF9263D431C"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.63,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6DC51A3_A292_F6AA_41C5_1BA1C94BC2D9"
},
{
 "thumbnailUrl": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_t.jpg",
 "partial": false,
 "label": "12. BA\u00d1O PPAL  - M+M copy",
 "id": "panorama_AFE25A8D_A272_5579_41B1_8BE368549D67",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AFE26A8D_A272_5579_41DE_7B37799C16C9"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.9,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B11E313C_A292_F79E_41DD_A30D5917510E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.7,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B653C1D2_A292_F6EA_41D2_6BEFA4FB1DA7"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_camera"
},
{
 "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
 "width": 160,
 "label": "1. EXT 1 - CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 80
},
{
 "thumbnailUrl": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_t.jpg",
 "partial": false,
 "label": "360  SALA",
 "id": "panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B2365212_A292_D56A_41E0_151EE8227148",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_ACE4CEE5_A276_AAAE_41D7_531B8B825D48",
  "this.overlay_ACE73EE5_A276_AAAE_41DA_329ED151DA10",
  "this.overlay_ACE77EE5_A276_AAAE_41A2_C01342F60926",
  "this.overlay_AD9EA3BE_A272_BA9A_41B9_B14DED5BD331"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.75,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6847189_A292_F766_41B3_EF9537D2E76B"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.14,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B15F716D_A292_F7BE_41E2_AB1AE9D3ED2C"
},
{
 "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
 "width": 4000,
 "label": "4. INT 1 - CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.2,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6EE21A9_A292_F6A6_41DD_CE90911CBF56"
},
{
 "thumbnailUrl": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_t.jpg",
 "partial": false,
 "label": "6.  ALCOBA PPAL  - M+M",
 "id": "panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AFE25A8D_A272_5579_41B1_8BE368549D67",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AFF96CF2_A272_AEAA_41E4_108BA3DD8595",
  "this.overlay_AFF94CF2_A272_AEAA_41E4_4710B4316507"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_camera"
},
{
 "opacity": 0.4,
 "fontFamily": "Arial",
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "label": "Media",
 "id": "Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "rollOverFontColor": "#FFFFFF",
 "children": [
  {
   "label": "360  SALA",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "03. 360 CORREDOR",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "4. EXT TERRAZA - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "CONECTOR",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "6.  ALCOBA PPAL  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "7.  TALLER  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "10.HAB 2  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "11. BAÑO HAB 2  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "12. BAÑO PPAL  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "13.SALON TV  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "14. cocina  - M+M - copia copy",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "15. OFICINA CATA  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "16. cocina  - M+M baño social",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "9.  SALA TALLER  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  }
 ],
 "selectedFontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "fontColor": "#FFFFFF",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040"
},
{
 "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
 "width": 4000,
 "label": "5. INT 2 - CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.9,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B169C178_A292_F7A6_41DC_7C02B5ADA00E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.27,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B631A1C8_A292_F6E6_41CD_F41F43B59681"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.96,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B642C1CD_A292_F6FE_41D7_EE4F55EDDD10"
},
{
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": false,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "gyroscopeEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.72,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B66C21D7_A292_F6EA_41A1_115FC4F41F42"
},
{
 "items": [
  {
   "media": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_camera"
  },
  {
   "media": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_camera"
  },
  {
   "media": "this.panorama_B2365212_A292_D56A_41E0_151EE8227148",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_B2365212_A292_D56A_41E0_151EE8227148_camera"
  },
  {
   "media": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_camera"
  },
  {
   "media": "this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_camera"
  },
  {
   "media": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C_camera"
  },
  {
   "media": "this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_camera"
  },
  {
   "media": "this.panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_camera"
  },
  {
   "media": "this.panorama_AFE25A8D_A272_5579_41B1_8BE368549D67",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_camera"
  },
  {
   "media": "this.panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_camera"
  },
  {
   "media": "this.panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_camera"
  },
  {
   "media": "this.panorama_AFEA2063_A27E_55AA_41D5_999E600D5352",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_camera"
  },
  {
   "media": "this.panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_camera"
  },
  {
   "media": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "camera": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
 "width": 1600,
 "label": "3. EXT 3 - CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 800
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.08,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6A08193_A292_F76A_4189_C138E811F85D"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.67,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6F8E1AE_A292_F6BA_41D7_70BBFE7B985C"
},
{
 "initialSequence": "this.sequence_8F89C3CC_82FC_16D0_41D7_BC36C46F28BB",
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_camera"
},
{
 "thumbnailUrl": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_t.jpg",
 "partial": false,
 "label": "16. cocina  - M+M ba\u00f1o social",
 "id": "panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_ACC71D45_A272_6FE9_41D2_F5A1AF4661AC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_t.jpg",
 "partial": false,
 "label": "4. EXT TERRAZA - M+M",
 "id": "panorama_B2365212_A292_D56A_41E0_151EE8227148",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_B2362212_A292_D56A_41E2_93EFD68763C0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_t.jpg",
 "partial": false,
 "label": "7.  TALLER  - M+M",
 "id": "panorama_AF975580_A272_7F67_41D1_7924A08C399C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AF976580_A272_7F67_41D9_6207E7DD4E52",
  "this.overlay_B2BE05B3_A271_DEAA_41E1_82E1CEA8D3F8"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_t.jpg",
 "partial": false,
 "label": "03. 360 CORREDOR",
 "id": "panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AFEA2063_A27E_55AA_41D5_999E600D5352",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_ADD92A0E_A276_B57A_41D6_2547BB62A702",
  "this.overlay_ADD9CA0E_A276_B57A_41A9_4D9B0F5377B4",
  "this.overlay_ADD9AA0E_A276_B57A_41D1_3945102BF306",
  "this.overlay_B29BD5AB_A276_5EBA_41DB_0A1EBB99C304"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.96,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B61BE1B8_A292_F6A6_41DD_E886ACA5646F"
},
{
 "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
 "width": 4000,
 "label": "6. EXT 4 - CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.56,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B62551C3_A292_F6EA_41E0_DE5EBB6DCFE1"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_camera"
},
{
 "thumbnailUrl": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_t.jpg",
 "partial": false,
 "label": "CONECTOR",
 "id": "panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AF33A597_A271_DF6A_41D1_2B5029396777",
  "this.overlay_AF33B597_A271_DF6A_41DF_9DE69D4C274D",
  "this.overlay_AF339597_A271_DF6A_41E1_856714048E16",
  "this.overlay_AF337597_A271_DF6A_41DE_F49835F5FA15"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.76,
  "pitch": -4.07,
  "hfov": 100
 },
 "id": "panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AF975580_A272_7F67_41D1_7924A08C399C_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.72,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B13CF15D_A292_F79E_4197_03314DB02E16"
},
{
 "items": [
  {
   "media": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
   "camera": "this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_camera"
  },
  {
   "media": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
   "camera": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_camera"
  },
  {
   "media": "this.panorama_B2365212_A292_D56A_41E0_151EE8227148",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
   "camera": "this.panorama_B2365212_A292_D56A_41E0_151EE8227148_camera"
  },
  {
   "media": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
   "camera": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_camera"
  },
  {
   "media": "this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
   "camera": "this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_camera"
  },
  {
   "media": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
   "camera": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C_camera"
  },
  {
   "media": "this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
   "camera": "this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_camera"
  },
  {
   "media": "this.panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
   "camera": "this.panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_camera"
  },
  {
   "media": "this.panorama_AFE25A8D_A272_5579_41B1_8BE368549D67",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
   "camera": "this.panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_camera"
  },
  {
   "media": "this.panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
   "camera": "this.panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_camera"
  },
  {
   "media": "this.panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
   "camera": "this.panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_camera"
  },
  {
   "media": "this.panorama_AFEA2063_A27E_55AA_41D5_999E600D5352",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
   "camera": "this.panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_camera"
  },
  {
   "media": "this.panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
   "camera": "this.panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_camera"
  },
  {
   "media": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 0)",
   "camera": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_camera"
  }
 ],
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "id": "panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_camera"
},
{
 "thumbnailUrl": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_t.jpg",
 "partial": false,
 "label": "10.HAB 2  - M+M copy",
 "id": "panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_AF8CFDF9_A272_AE99_41E2_A3F91C6AEBBC",
  "this.overlay_AF8CCDF9_A272_AE99_41E0_32FE4ACF9F99"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
 "width": 4000,
 "label": "7. INT 3- CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2000
},
{
 "thumbnailUrl": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_t.jpg",
 "partial": false,
 "label": "9.  SALA TALLER  - M+M",
 "id": "panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_B3E5BC6E_A273_ADBA_41B9_E6D56F20E2DE"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 162.88,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B1149147_A292_F7EA_41D6_29D48D102089"
},
{
 "thumbnailUrl": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_t.jpg",
 "partial": false,
 "label": "15. OFICINA CATA  - M+M",
 "id": "panorama_AFEA2063_A27E_55AA_41D5_999E600D5352",
 "cardboardMenu": "this.Menu_B1F7F125_A292_F7AE_41CA_A89DEC7E116B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 100,
 "overlays": [
  "this.overlay_B213BB39_A276_6BA6_41E0_AAB6DA023285"
 ],
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.17,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B17A617E_A292_F79A_41E3_613EBF0F7D9B"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.45,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B121A152_A292_F7EA_41D7_7C75E8D7706F"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.92,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6C3819E_A292_F69A_41B9_3E546A273782"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.62,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B6B13198_A292_F766_41BC_24D9380BB596"
},
{
 "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
 "class": "Photo",
 "duration": 5000,
 "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
 "width": 1600,
 "label": "2. EXT 2 - CABA\u00d1A VT1",
 "image": {
  "levels": [
   {
    "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 800
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.05,
  "pitch": 0,
  "hfov": 100
 },
 "id": "camera_B60971B3_A292_F6AA_41DE_978BBCBBC400"
},
{
 "playbackBarBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipTextShadowOpacity": 1,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "paddingBottom": 0,
 "width": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "propagateClick": false,
 "toolTipShadowOpacity": 0,
 "vrPointerSelectionColor": "#FF6600",
 "progressRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "minHeight": 50,
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "progressBottom": 0,
 "playbackBarHeadShadow": true,
 "toolTipFontColor": "#FFFFFF",
 "minWidth": 100,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "toolTipBackgroundColor": "#000000",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "height": "100%",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingRight": 14,
 "transitionDuration": 500,
 "paddingTop": 0,
 "toolTipPaddingTop": 9,
 "borderRadius": 0,
 "playbackBarLeft": 0,
 "shadow": false,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 1,
 "toolTipPaddingLeft": 14,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "progressBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "top": 0,
 "toolTipTextShadowVerticalLength": 0,
 "toolTipFontSize": 13,
 "toolTipOpacity": 0.7,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeight": 10,
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipPaddingBottom": 9,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "progressLeft": 0
},
{
 "children": [
  "this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106"
 ],
 "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
 "horizontalAlign": "right",
 "paddingBottom": 0,
 "width": "22.545%",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": 25,
 "overflow": "visible",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 265,
 "top": "89%",
 "scrollBarVisible": "rollOver",
 "bottom": "3%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "layout": "horizontal",
 "gap": 1,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--Settings Button Set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 5
},
{
 "horizontalAlign": "left",
 "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
 "left": "2.14%",
 "paddingBottom": 0,
 "width": "21%",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 120,
 "verticalAlign": "top",
 "minWidth": 300,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "top": "3.5%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "layout": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "data": {
  "name": "--Stickers Container"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": "25%",
 "borderRadius": 0
},
{
 "visible": false,
 "selectedItemLabelFontWeight": "bold",
 "maxWidth": 150,
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
 "scrollBarWidth": 7,
 "paddingBottom": 20,
 "itemLabelGap": 9,
 "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "propagateClick": false,
 "itemLabelFontColor": "#FFFFFF",
 "right": "2%",
 "verticalAlign": "top",
 "paddingLeft": 15,
 "minHeight": 1,
 "itemBackgroundColorDirection": "vertical",
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemBackgroundColorRatios": [],
 "selectedItemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFFFFF",
 "itemThumbnailHeight": 80,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "selectedItemBorderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemMode": "normal",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#52B7EF",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "gap": 10,
 "scrollBarOpacity": 1,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailWidth": 80,
 "height": "82.127%",
 "selectedItemBorderSize": 0,
 "itemBorderRadius": 0,
 "paddingTop": 20,
 "selectedItemThumbnailShadowBlurRadius": 10,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "borderRadius": 3,
 "rollOverItemLabelFontColor": "#FFFFFF",
 "itemBackgroundOpacity": 0,
 "rollOverItemLabelTextDecoration": "underline",
 "backgroundColorRatios": [
  0
 ],
 "selectedItemThumbnailShadow": true,
 "paddingRight": 15,
 "itemThumbnailBorderRadius": 50,
 "class": "ThumbnailList",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "top": "3.5%",
 "selectedItemBackgroundColor": [],
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailOpacity": 1,
 "selectedItemLabelFontSize": 12,
 "itemLabelTextDecoration": "none",
 "layout": "vertical",
 "itemLabelFontWeight": "normal",
 "itemPaddingRight": 3,
 "selectedItemLabelFontStyle": "italic",
 "scrollBarMargin": 4,
 "selectedItemLabelTextDecoration": "underline",
 "selectedItemThumbnailShadowOpacity": 0.73,
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 12,
 "data": {
  "name": "-ThumbnailList"
 },
 "horizontalAlign": "left",
 "itemThumbnailScaleMode": "fit_outside",
 "backgroundOpacity": 0.25,
 "selectedItemThumbnailShadowHorizontalLength": 0
},
{
 "children": [
  "this.Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B"
 ],
 "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
 "left": "2%",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "width": "37.394%",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Container",
 "minHeight": 1,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "3%",
 "height": 92,
 "borderSize": 0,
 "layout": "vertical",
 "gap": 1,
 "scrollBarMargin": 2,
 "data": {
  "name": "-Discover Container"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0
},
{
 "maxHeight": 265,
 "maxWidth": 485,
 "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "width": "5%",
 "paddingRight": 0,
 "right": "0.6%",
 "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0.98%",
 "height": "5%",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image21736"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0
},
{
 "cursor": "hand",
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 1,
 "toolTipBorderRadius": 1,
 "horizontalAlign": "center",
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "paddingBottom": 0,
 "width": "17.15%",
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "minHeight": 1,
 "verticalAlign": "middle",
 "toolTip": "Audio On/Off",
 "toolTipTextShadowVerticalLength": 0,
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipFontColor": "#FFFFFF",
 "transparencyActive": true,
 "toolTipShadowBlurRadius": 3,
 "minWidth": 1,
 "mode": "toggle",
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "toolTipFontWeight": "normal",
 "height": "76.75%",
 "toolTipBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "data": {
  "name": "Icon audio"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "borderRadius": 0,
 "toolTipDisplayTime": 600
},
{
 "cursor": "hand",
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 1,
 "toolTipBorderRadius": 1,
 "horizontalAlign": "center",
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "paddingBottom": 0,
 "width": "17.48%",
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "class": "IconButton",
 "minHeight": 1,
 "verticalAlign": "middle",
 "toolTip": "Full Screen",
 "toolTipTextShadowVerticalLength": 0,
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipFontColor": "#FFFFFF",
 "transparencyActive": true,
 "toolTipShadowBlurRadius": 3,
 "minWidth": 1,
 "mode": "toggle",
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "toolTipFontWeight": "normal",
 "height": "76.75%",
 "toolTipBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "data": {
  "name": "Icon fullscreen"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "borderRadius": 0,
 "toolTipDisplayTime": 600
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4, this.camera_B642C1CD_A292_F6FE_41D7_EE4F55EDDD10); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -115.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21
  }
 ],
 "id": "overlay_ACF7AB9D_A27E_6A9E_41DC_E7158FDF4749",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -115.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence",
 "id": "sequence_B14C0168_A292_F7A6_41E0_37DB04B1FC96",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7, this.camera_B66C21D7_A292_F6EA_41A1_115FC4F41F42); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 85.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.42
  }
 ],
 "id": "overlay_AFD396F4_A271_BAAE_41DE_86672900A5A5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 85.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39, this.camera_B121A152_A292_F7EA_41D7_7C75E8D7706F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.65
  }
 ],
 "id": "overlay_AF8BEB0B_A272_AB7A_41DE_7AF9263D431C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.43,
   "yaw": 96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0, this.camera_B653C1D2_A292_F6EA_41D2_6BEFA4FB1DA7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -175.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.76
  }
 ],
 "id": "overlay_AFE26A8D_A272_5579_41DE_7B37799C16C9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -175.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFE25A8D_A272_5579_41B1_8BE368549D67_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202, this.camera_B61421BD_A292_F69E_41DE_8F02CAF39961); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -114.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_1_HS_5_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.1
  }
 ],
 "id": "overlay_ACE4CEE5_A276_AAAE_41D7_531B8B825D48",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_B2365212_A292_D56A_41E0_151EE8227148, this.camera_B62551C3_A292_F6EA_41E0_DE5EBB6DCFE1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -3.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_1_HS_7_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17
  }
 ],
 "id": "overlay_ACE73EE5_A276_AAAE_41DA_329ED151DA10",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ACF78B9D_A27E_6A9E_41B7_A56D8523A8AD, this.camera_B631A1C8_A292_F6E6_41CD_F41F43B59681); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 120.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_1_HS_8_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53
  }
 ],
 "id": "overlay_ACE77EE5_A276_AAAE_41A2_C01342F60926",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 120.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515, this.camera_B61BE1B8_A292_F6A6_41DD_E886ACA5646F); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 164.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_1_HS_9_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.03
  }
 ],
 "id": "overlay_AD9EA3BE_A272_BA9A_41B9_B14DED5BD331",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.43,
   "yaw": 164.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4_1_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7, this.camera_B1073137_A292_F7AA_41D7_2380060CFB07); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -127.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.34
  }
 ],
 "id": "overlay_AFF96CF2_A272_AEAA_41E4_108BA3DD8595",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AFE25A8D_A272_5579_41B1_8BE368549D67, this.camera_B11E313C_A292_F79E_41DD_A30D5917510E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -163.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_1_HS_1_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.15
  }
 ],
 "id": "overlay_AFF94CF2_A272_AEAA_41E4_4710B4316507",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -163.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "cursor": "hand",
 "maxHeight": 70,
 "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "maxWidth": 70,
 "paddingBottom": 0,
 "width": "17.15%",
 "propagateClick": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "height": "76.75%",
 "data": {
  "name": "IconButton8475"
 },
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
 "borderRadius": 0
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence",
 "id": "sequence_8F89C3CC_82FC_16D0_41D7_BC36C46F28BB",
 "restartMovementOnUserInteraction": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4, this.camera_B15F716D_A292_F7BE_41E2_AB1AE9D3ED2C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 98.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82
  }
 ],
 "id": "overlay_ACC71D45_A272_6FE9_41D2_F5A1AF4661AC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 98.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF6023F1_A27E_5AA6_41D4_48BD83A68515_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4, this.camera_B1742183_A292_F76A_41C2_7F57ED1FFDA9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -157.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2365212_A292_D56A_41E0_151EE8227148_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.09
  }
 ],
 "id": "overlay_B2362212_A292_D56A_41E2_93EFD68763C0",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202, this.camera_B169C178_A292_F7A6_41DC_7C02B5ADA00E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -141.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.85
  }
 ],
 "id": "overlay_AF976580_A272_7F67_41D9_6207E7DD4E52",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74, this.camera_B17A617E_A292_F79A_41E3_613EBF0F7D9B); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 13.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_1_HS_1_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05
  }
 ],
 "id": "overlay_B2BE05B3_A271_DEAA_41E1_82E1CEA8D3F8",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 13.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202, this.camera_B6A08193_A292_F76A_4189_C138E811F85D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -179.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_1_HS_20_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.41
  }
 ],
 "id": "overlay_ADD92A0E_A276_B57A_41D6_2547BB62A702",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_AFF90CF2_A272_AEAA_41D4_AADF4A448CA0, this.camera_B696018E_A292_F77A_41DA_EDF75FC236BB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 0.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_1_HS_21_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.59
  }
 ],
 "id": "overlay_ADD9CA0E_A276_B57A_41A9_4D9B0F5377B4",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AFD3A6F3_A271_BAAA_41E3_CCEEBADC3C92, this.camera_B6C3819E_A292_F69A_41B9_3E546A273782); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -167.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_1_HS_22_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79
  }
 ],
 "id": "overlay_ADD9AA0E_A276_B57A_41D1_3945102BF306",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -167.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_1_HS_22_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AFEA2063_A27E_55AA_41D5_999E600D5352, this.camera_B6B13198_A292_F766_41BC_24D9380BB596); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -17.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_1_HS_23_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.98
  }
 ],
 "id": "overlay_B29BD5AB_A276_5EBA_41DB_0A1EBB99C304",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -17.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7_1_HS_23_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_ACE4FEE4_A276_AAAE_41B8_90753FF572B4, this.camera_B60971B3_A292_F6AA_41DE_978BBCBBC400); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.09
  }
 ],
 "id": "overlay_AF33A597_A271_DF6A_41D1_2B5029396777",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7, this.camera_B6EE21A9_A292_F6A6_41DD_CE90911CBF56); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -76.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_1_HS_1_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39
  }
 ],
 "id": "overlay_AF33B597_A271_DF6A_41DF_9DE69D4C274D",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39, this.camera_B6F8E1AE_A292_F6BA_41D7_70BBFE7B985C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -61.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_1_HS_2_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39
  }
 ],
 "id": "overlay_AF339597_A271_DF6A_41E1_856714048E16",
 "data": {
  "label": "Image"
 },
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF975580_A272_7F67_41D1_7924A08C399C, this.camera_B6DC51A3_A292_F6AA_41C5_1BA1C94BC2D9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -124.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_1_HS_3_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79
  }
 ],
 "id": "overlay_AF337597_A271_DF6A_41DE_F49835F5FA15",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.4,
   "yaw": -124.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF33F597_A271_DF6A_41E1_7F16364E7202_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF33F597_A271_DF6A_41E1_7F16364E7202, this.camera_B13CF15D_A292_F79E_4197_03314DB02E16); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -173.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.97
  }
 ],
 "id": "overlay_AF8CFDF9_A272_AE99_41E2_A3F91C6AEBBC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -173.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF8B1B0B_A272_AB7A_41DD_0811A1FE89CA, this.camera_B14C1168_A292_F7A6_41D0_A7655F9D4686); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -86.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_1_HS_1_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.34
  }
 ],
 "id": "overlay_AF8CCDF9_A272_AE99_41E0_32FE4ACF9F99",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -86.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF8CEDF9_A272_AE99_41E1_EE6D19C97D39_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AF975580_A272_7F67_41D1_7924A08C399C, this.camera_B6847189_A292_F766_41B3_EF9537D2E76B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -143.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95
  }
 ],
 "id": "overlay_B3E5BC6E_A273_ADBA_41B9_E6D56F20E2DE",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -143.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ADD93A0E_A276_B57A_41D1_EBD11E399EC7, this.camera_B1149147_A292_F7EA_41D6_29D48D102089); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": 117.38,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_1_HS_0_0.png",
      "width": 116,
      "height": 114,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82
  }
 ],
 "id": "overlay_B213BB39_A276_6BA6_41E0_AAB6DA023285",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 117.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_AFEA2063_A27E_55AA_41D5_999E600D5352_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "children": [
  "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
  "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
  "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930"
 ],
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
 "paddingBottom": 0,
 "width": "75.269%",
 "paddingRight": 0,
 "overflow": "visible",
 "propagateClick": false,
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "layout": "horizontal",
 "gap": 10,
 "scrollBarMargin": 2,
 "data": {
  "name": "-Hide buttons"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": "100%",
 "borderRadius": 0
},
{
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
 "paddingBottom": 0,
 "width": "100%",
 "paddingRight": 0,
 "overflow": "visible",
 "propagateClick": false,
 "class": "Container",
 "minHeight": 1,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "layout": "horizontal",
 "gap": 10,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container Content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": "55.435%",
 "borderRadius": 0
}],
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "minWidth": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.85,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } }
 },
 "data": {
  "name": "Player463"
 },
 "mouseWheelEnabled": true,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
