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
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "vrPolyfillScale": 0.85,
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "definitions": [{
 "initialPosition": {
  "hfov": 100,
  "yaw": -62.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27409797_3480_8EF0_41B6_9FA6F05D8219",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA"
  }
 ],
 "hfov": 360,
 "id": "panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045",
 "thumbnailUrl": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_t.jpg",
 "label": "16. cocina  - M+M ba\u00f1o social",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3ABB43BB_3480_8630_41C1_A88A2856BF0A"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3AF202EF_3480_8651_41A3_B557DA322783_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA"
  }
 ],
 "hfov": 360,
 "id": "panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D",
 "thumbnailUrl": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_t.jpg",
 "label": "14. cocina  - M+M - copia copy",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3A846E7B_3481_7E30_41C9_47CBC5177EAD"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA"
  }
 ],
 "hfov": 360,
 "id": "panorama_3AF202EF_3480_8651_41A3_B557DA322783",
 "thumbnailUrl": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_t.jpg",
 "label": "0.  EXT acceso  ( DIA ) - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3BF16EBF_348F_9E31_41C6_A6B013AFBF84"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 12.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27B3C746_3480_8E53_41AD_676E173FA893",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 65.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_273CE78C_3480_8ED0_41C3_E0303F7710BA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -179.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20DD57C8_3480_8E50_41BF_2038902AE073",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 12.42,
  "class": "PanoramaCameraPosition",
  "pitch": -6.57
 },
 "id": "panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 5.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20B907BD_3480_8E30_41A5_E1DC821949DB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_272A6786_3480_8ED0_41AA_1833DA0A337C",
 "initialPosition": {
  "hfov": 100,
  "yaw": 38.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "1. EXT 1 - CABA\u00d1A VT1",
 "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
 "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
 "width": 160,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 80
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 103.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_276247A2_3480_8ED0_41BC_1057A2D12158",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_39665B1B_3480_87F0_419D_E606F50A4EE2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE"
  }
 ],
 "hfov": 360,
 "id": "panorama_39DFD842_3487_8250_41B6_3A9D167E70F8",
 "thumbnailUrl": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_t.jpg",
 "label": "03. 360 CORREDOR",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_39DFE842_3487_8250_41C7_EF48C3705F48",
  "this.overlay_39DF0842_3487_8250_41BB_4ADE35E5455E",
  "this.overlay_39DF3842_3487_8250_41C6_092BA353DED0",
  "this.overlay_39DF2842_3487_8250_41C7_22CC98A4DB29"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -68.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_245A881B_3480_81F1_41AD_DD27C795902D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -94.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2753A79C_3480_8EF0_41B6_058D3EFABAA4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74"
  }
 ],
 "hfov": 360,
 "id": "panorama_AF975580_A272_7F67_41D1_7924A08C399C",
 "thumbnailUrl": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_t.jpg",
 "label": "7.  TALLER  - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_AF976580_A272_7F67_41D9_6207E7DD4E52",
  "this.overlay_B2BE05B3_A271_DEAA_41E1_82E1CEA8D3F8"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA"
  }
 ],
 "hfov": 360,
 "id": "panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B",
 "thumbnailUrl": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_t.jpg",
 "label": "4. EXT TERRAZA - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3AAF837E_3487_8630_41C5_7D95779D8A23"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "2. EXT 2 - CABA\u00d1A VT1",
 "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
 "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
 "width": 1600,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 800
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "3. EXT 3 - CABA\u00d1A VT1",
 "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
 "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
 "width": 1600,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 800
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -81.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2442580D_3480_81D0_4196_51BF26381E17",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AF202EF_3480_8651_41A3_B557DA322783"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B"
  }
 ],
 "hfov": 360,
 "id": "panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA",
 "thumbnailUrl": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_t.jpg",
 "label": "360  SALA",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_39690F91_3480_BEF0_41B3_B85F3415A401",
  "this.overlay_39692F91_3480_BEF0_41B6_713573E2B72D",
  "this.overlay_39694F91_3480_BEF0_41BB_A12586C5421B",
  "this.overlay_39697F91_3480_BEF0_41B8_8EF4EFCFA956",
  "this.overlay_3B7CC80F_3481_81D1_41C7_C67E70D26150"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3960193F_3480_8231_41C5_E1EA9498880E"
  }
 ],
 "hfov": 360,
 "id": "panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E",
 "thumbnailUrl": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_t.jpg",
 "label": "CONECTOR",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3BE9E10F_3480_83D0_41BD_7C5370DA5A7E",
  "this.overlay_3BEA110F_3480_83D0_41B7_76395208AA5F",
  "this.overlay_3BEA210F_3480_83D0_41C2_D74AA1A288C5",
  "this.overlay_3BEA310F_3480_83D0_41C4_63CCF3140EA9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8"
  }
 ],
 "hfov": 360,
 "id": "panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98",
 "thumbnailUrl": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_t.jpg",
 "label": "13.SALON TV  - M+M copy",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3AA1B31A_3481_87F0_41AF_2748C28AC18C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3960193F_3480_8231_41C5_E1EA9498880E"
  }
 ],
 "hfov": 360,
 "id": "panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905",
 "thumbnailUrl": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_t.jpg",
 "label": "11. BA\u00d1O HAB 2  - M+M copy",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3AA00E5A_3481_9E70_4188_6C9CAE0526D2"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "7. INT 3- CABA\u00d1A VT1",
 "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
 "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 176.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_270BA777_3480_8E30_41BA_AC161B02726E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E"
  }
 ],
 "hfov": 360,
 "id": "panorama_3960193F_3480_8231_41C5_E1EA9498880E",
 "thumbnailUrl": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_t.jpg",
 "label": "10.HAB 2  - M+M copy",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3960F93F_3480_8231_41C5_CBCA85B23B1B",
  "this.overlay_3960C93F_3480_8231_41C7_8D3A8B627071"
 ]
},
{
 "touchControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "gyroscopeEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": false
},
{
 "items": [
  {
   "media": "this.panorama_3AF202EF_3480_8651_41A3_B557DA322783",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AF202EF_3480_8651_41A3_B557DA322783_camera"
  },
  {
   "media": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_camera"
  },
  {
   "media": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_camera"
  },
  {
   "media": "this.panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_camera"
  },
  {
   "media": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_camera"
  },
  {
   "media": "this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_camera"
  },
  {
   "media": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C_camera"
  },
  {
   "media": "this.panorama_3960193F_3480_8231_41C5_E1EA9498880E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3960193F_3480_8231_41C5_E1EA9498880E_camera"
  },
  {
   "media": "this.panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_camera"
  },
  {
   "media": "this.panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_camera"
  },
  {
   "media": "this.panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_camera"
  },
  {
   "media": "this.panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_camera"
  },
  {
   "media": "this.panorama_39665B1B_3480_87F0_419D_E606F50A4EE2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_camera"
  },
  {
   "media": "this.panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_camera"
  },
  {
   "media": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_camera"
  },
  {
   "media": "this.panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_camera"
  }
 ],
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_8F89C3CC_82FC_16D0_41D7_BC36C46F28BB",
 "automaticZoomSpeed": 10,
 "id": "panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_camera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 162.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27F9176C_3480_8E50_41C7_80FD3F96C23E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_20A6D7B7_3480_8E30_41B0_4B054DE2E9EE",
 "initialPosition": {
  "hfov": 100,
  "yaw": -166.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C"
  }
 ],
 "hfov": 360,
 "id": "panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
 "thumbnailUrl": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_t.jpg",
 "label": "9.  SALA TALLER  - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B3E5BC6E_A273_ADBA_41B9_E6D56F20E2DE",
  "this.overlay_25AAF69E_3480_8EF3_41B8_36C0BA77D737"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_279CF72A_3480_8FD3_41C8_6BA39E941366",
 "automaticZoomSpeed": 10,
 "id": "camera_279C872A_3480_8FD3_41C9_E4256A471CA0",
 "initialPosition": {
  "hfov": 100,
  "yaw": -84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE"
  }
 ],
 "hfov": 360,
 "id": "panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8",
 "thumbnailUrl": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_t.jpg",
 "label": "12. BA\u00d1O PPAL  - M+M copy",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3AF632F4_3481_8630_41C6_830DA6D7B402"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 118.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27AEA730_3480_8FCF_41AB_EA1A76663A5E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 52.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_277517A7_3480_8ED0_41A8_E9534391F271",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AF202EF_3480_8651_41A3_B557DA322783"
  }
 ],
 "hfov": 360,
 "id": "panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C",
 "thumbnailUrl": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_t.jpg",
 "label": "17.  EXT acceso TALLER  ( DIA ) - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_24AFC420_3480_81D0_41C9_F87ABB9551D7",
  "this.overlay_26F508A5_3481_82D0_41B8_DBFCD0707FAB"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 102.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20EC27CD_3480_8E50_41A3_7C21EC7A4779",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 55.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27D7A758_3480_8E7F_41C3_49237699F866",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_3AF202EF_3480_8651_41A3_B557DA322783",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AF202EF_3480_8651_41A3_B557DA322783_camera"
  },
  {
   "media": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_camera"
  },
  {
   "media": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_camera"
  },
  {
   "media": "this.panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_camera"
  },
  {
   "media": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_camera"
  },
  {
   "media": "this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_camera"
  },
  {
   "media": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AF975580_A272_7F67_41D1_7924A08C399C_camera"
  },
  {
   "media": "this.panorama_3960193F_3480_8231_41C5_E1EA9498880E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3960193F_3480_8231_41C5_E1EA9498880E_camera"
  },
  {
   "media": "this.panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_camera"
  },
  {
   "media": "this.panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_camera"
  },
  {
   "media": "this.panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_camera"
  },
  {
   "media": "this.panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_camera"
  },
  {
   "media": "this.panorama_39665B1B_3480_87F0_419D_E606F50A4EE2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_camera"
  },
  {
   "media": "this.panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_camera"
  },
  {
   "media": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_camera"
  },
  {
   "media": "this.panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C",
   "camera": "this.panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 6.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_274FA792_3480_8EF0_41C4_51DD134ABB10",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_271A577D_3480_8E30_419F_2A4A1DB625D9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -163.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_209647B2_3480_8E30_4187_0F726314BBE5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "4. INT 1 - CABA\u00d1A VT1",
 "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
 "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 64.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_245E2814_3480_81F0_41A7_E8928096EDF1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "fontFamily": "Arial",
 "children": [
  {
   "label": "0.  EXT acceso  ( DIA ) - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "360  SALA",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "03. 360 CORREDOR",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "4. EXT TERRAZA - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "CONECTOR",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "6.  ALCOBA PPAL  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "7.  TALLER  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "10.HAB 2  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  },
  {
   "label": "11. BAÑO HAB 2  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "MenuItem"
  },
  {
   "label": "12. BAÑO PPAL  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "MenuItem"
  },
  {
   "label": "13.SALON TV  - M+M copy",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "MenuItem"
  },
  {
   "label": "14. cocina  - M+M - copia copy",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "MenuItem"
  },
  {
   "label": "15. OFICINA CATA  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "MenuItem"
  },
  {
   "label": "16. cocina  - M+M baño social",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "MenuItem"
  },
  {
   "label": "9.  SALA TALLER  - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "MenuItem"
  },
  {
   "label": "17.  EXT acceso TALLER  ( DIA ) - M+M",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "selectedBackgroundColor": "#202020",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "backgroundColor": "#404040",
 "opacity": 0.4
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3960193F_3480_8231_41C5_E1EA9498880E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -15.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27A1373B_3480_8E31_41AC_99EE29F11C5E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 93.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27C2474C_3480_8E57_41C1_683450B733E2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8"
  }
 ],
 "hfov": 360,
 "id": "panorama_3A1506B4_3480_8E30_41C7_C143D81288EE",
 "thumbnailUrl": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_t.jpg",
 "label": "6.  ALCOBA PPAL  - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3A1576B4_3480_8E30_41A0_A8B1D39E3715",
  "this.overlay_3A1546B4_3480_8E30_41B4_F9519DAF227E"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -133.76,
  "class": "PanoramaCameraPosition",
  "pitch": -4.07
 },
 "id": "panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "5. INT 2 - CABA\u00d1A VT1",
 "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
 "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 36.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_27E66762_3480_8E53_41C0_D5428554B60A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": -59.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20FEE7D2_3480_8E70_41C1_E1364B830AF3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 16.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2087E7AC_3480_8ED0_4197_0C43E9DA1270",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8"
  }
 ],
 "hfov": 360,
 "id": "panorama_39665B1B_3480_87F0_419D_E606F50A4EE2",
 "thumbnailUrl": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_t.jpg",
 "label": "15. OFICINA CATA  - M+M",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "cardboardMenu": "this.Menu_2679F712_3480_8FF3_41C1_F4CC1FEEEF29",
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_39668B1B_3480_87F0_41BA_8DC39CFF0E44"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 22.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_24540821_3480_81D1_41BB_A2F97A1AE785",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 176.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20F197D8_3480_8E70_419B_643FC800D262",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "6. EXT 4 - CABA\u00d1A VT1",
 "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
 "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 4.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20CA57C2_3480_8E50_41A8_15CFE110EB16",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_AF975580_A272_7F67_41D1_7924A08C399C_camera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "transitionDuration": 500,
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 9,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "toolTipPaddingLeft": 14,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 1,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 9,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "progressLeft": 0,
 "toolTipTextShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "paddingBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106"
 ],
 "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "22.545%",
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 5,
 "borderSize": 0,
 "paddingRight": 0,
 "right": 25,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 50,
 "propagateClick": false,
 "top": "89%",
 "bottom": "3%",
 "scrollBarOpacity": 0.5,
 "minWidth": 265,
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "gap": 1,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "horizontal",
 "paddingTop": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "right",
 "data": {
  "name": "--Settings Button Set"
 },
 "shadow": false
},
{
 "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
 "left": "2.14%",
 "backgroundOpacity": 0,
 "width": "21%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 120,
 "propagateClick": false,
 "top": "3.5%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 300,
 "height": "25%",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "--Stickers Container"
 }
},
{
 "data": {
  "name": "-ThumbnailList"
 },
 "maxWidth": 150,
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
 "scrollBarMargin": 4,
 "itemPaddingBottom": 3,
 "scrollBarWidth": 7,
 "selectedItemLabelFontColor": "#FFFFFF",
 "class": "ThumbnailList",
 "right": "2%",
 "borderRadius": 3,
 "selectedItemBackgroundColorRatios": [],
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 15,
 "selectedItemBorderSize": 0,
 "minHeight": 1,
 "scrollBarOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "top",
 "itemLabelFontFamily": "Arial",
 "selectedItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "itemBorderRadius": 0,
 "selectedItemBorderRadius": 0,
 "itemOpacity": 1,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowBlurRadius": 10,
 "scrollBarColor": "#52B7EF",
 "height": "82.127%",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemLabelFontWeight": "bold",
 "horizontalAlign": "left",
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemThumbnailBorderRadius": 50,
 "rollOverItemLabelTextDecoration": "underline",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "selectedItemBackgroundOpacity": 0,
 "backgroundOpacity": 0.25,
 "itemBackgroundColorRatios": [],
 "borderSize": 0,
 "paddingRight": 15,
 "rollOverItemLabelFontWeight": "bold",
 "itemThumbnailOpacity": 1,
 "propagateClick": false,
 "top": "3.5%",
 "selectedItemBackgroundColor": [],
 "selectedItemLabelFontSize": 12,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#FFFFFF",
 "selectedItemLabelTextDecoration": "underline",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowOpacity": 0.73,
 "itemThumbnailScaleMode": "fit_outside",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontStyle": "italic",
 "backgroundColorDirection": "vertical",
 "itemLabelFontSize": 12,
 "paddingBottom": 20,
 "gap": 10,
 "itemLabelFontColor": "#FFFFFF",
 "paddingTop": 20,
 "layout": "vertical",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "itemVerticalAlign": "middle",
 "visible": false,
 "itemThumbnailHeight": 80,
 "itemThumbnailWidth": 80
},
{
 "children": [
  "this.Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B"
 ],
 "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
 "left": "2%",
 "backgroundOpacity": 0,
 "width": "37.394%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "bottom": "3%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 92,
 "contentOpaque": false,
 "gap": 1,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "vertical",
 "paddingTop": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-Discover Container"
 },
 "shadow": false
},
{
 "maxHeight": 265,
 "maxWidth": 485,
 "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
 "backgroundOpacity": 0,
 "width": "5%",
 "class": "Image",
 "right": "0.6%",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.98%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "5%",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image21736"
 }
},
{
 "transparencyActive": true,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "backgroundOpacity": 0,
 "width": "17.48%",
 "toolTipBorderSize": 0,
 "class": "IconButton",
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "toolTipTextShadowHorizontalLength": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "toolTipBorderRadius": 1,
 "toolTipTextShadowVerticalLength": 0,
 "minHeight": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTip": "Full Screen",
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipShadowSpread": 0,
 "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": "76.75%",
 "toolTipBorderColor": "#767676",
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
 "paddingTop": 0,
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "toolTipFontColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "data": {
  "name": "Icon fullscreen"
 }
},
{
 "transparencyActive": true,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "backgroundOpacity": 0,
 "width": "17.15%",
 "toolTipBorderSize": 0,
 "class": "IconButton",
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "toolTipTextShadowHorizontalLength": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "toolTipBorderRadius": 1,
 "toolTipTextShadowVerticalLength": 0,
 "minHeight": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTip": "Audio On/Off",
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipShadowSpread": 0,
 "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": "76.75%",
 "toolTipBorderColor": "#767676",
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingBottom": 0,
 "toolTipShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
 "paddingTop": 0,
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "toolTipFontColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "data": {
  "name": "Icon audio"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA, this.camera_27A1373B_3480_8E31_41AC_99EE29F11C5E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.82,
   "yaw": 98.04
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3ABB43BB_3480_8630_41C1_A88A2856BF0A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 98.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA, this.camera_20FEE7D2_3480_8E70_41C1_E1364B830AF3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.21,
   "yaw": -115.73
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3A846E7B_3481_7E30_41C9_47CBC5177EAD",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -115.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA, this.camera_20B907BD_3480_8E30_41A5_E1DC821949DB); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.08,
   "yaw": -3.93
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3BF16EBF_348F_9E31_41C6_A6B013AFBF84",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -3.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF202EF_3480_8651_41A3_B557DA322783_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E, this.camera_276247A2_3480_8ED0_41BC_1057A2D12158); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_1_HS_20_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.41,
   "yaw": -179.8
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39DFE842_3487_8250_41C7_EF48C3705F48",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE, this.camera_277517A7_3480_8ED0_41A8_E9534391F271); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_1_HS_21_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.59,
   "yaw": 0.82
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39DF0842_3487_8250_41BB_4ADE35E5455E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98, this.camera_2753A79C_3480_8EF0_41B6_058D3EFABAA4); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_1_HS_22_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.79,
   "yaw": -167.28
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39DF3842_3487_8250_41C6_092BA353DED0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -167.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_1_HS_22_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_39665B1B_3480_87F0_419D_E606F50A4EE2, this.camera_27409797_3480_8EF0_41B6_9FA6F05D8219); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_1_HS_23_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.98,
   "yaw": -17.12
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39DF2842_3487_8250_41C7_22CC98A4DB29",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -17.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39DFD842_3487_8250_41B6_3A9D167E70F8_1_HS_23_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E, this.camera_27D7A758_3480_8E7F_41C3_49237699F866); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.85,
   "yaw": -141.37
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AF976580_A272_7F67_41D9_6207E7DD4E52",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74, this.camera_27E66762_3480_8E53_41C0_D5428554B60A); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_1_HS_1_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.05,
   "yaw": 13.25
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B2BE05B3_A271_DEAA_41E1_82E1CEA8D3F8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 13.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AF975580_A272_7F67_41D1_7924A08C399C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA, this.camera_270BA777_3480_8E30_41BA_AC161B02726E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.09,
   "yaw": -157.44
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3AAF837E_3487_8630_41C5_7D95779D8A23",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E, this.camera_245A881B_3480_81F1_41AD_DD27C795902D); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_5_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.1,
   "yaw": -114.95
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39690F91_3480_BEF0_41B3_B85F3415A401",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AAFE37E_3487_8630_41C2_5950FBDDF45B, this.camera_24540821_3480_81D1_41BB_A2F97A1AE785); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_7_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.17,
   "yaw": -3.28
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39692F91_3480_BEF0_41B6_713573E2B72D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A847E7A_3481_7E31_41B5_EF05F95E083D, this.camera_245E2814_3480_81F0_41A7_E8928096EDF1); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_8_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.53,
   "yaw": 120.04
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39694F91_3480_BEF0_41BB_A12586C5421B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 120.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AB8B3BB_3480_8630_41A9_E1C37BFCA045, this.camera_2442580D_3480_81D0_4196_51BF26381E17); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_9_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.03,
   "yaw": 164.86
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39697F91_3480_BEF0_41B8_8EF4EFCFA956",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.43,
   "yaw": 164.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AF202EF_3480_8651_41A3_B557DA322783, this.camera_20F197D8_3480_8E70_419B_643FC800D262); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_10_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.44,
   "yaw": -174.12
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3B7CC80F_3481_81D1_41C7_C67E70D26150",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -174.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_396AEF90_3480_BEF0_41A4_EC4DDAB6A2EA, this.camera_273CE78C_3480_8ED0_41C3_E0303F7710BA); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.09,
   "yaw": 111.11
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3BE9E10F_3480_83D0_41BD_7C5370DA5A7E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8, this.camera_271A577D_3480_8E30_419F_2A4A1DB625D9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_1_HS_1_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.39,
   "yaw": -76.92
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3BEA110F_3480_83D0_41B7_76395208AA5F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3960193F_3480_8231_41C5_E1EA9498880E, this.camera_274FA792_3480_8EF0_41C4_51DD134ABB10); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_1_HS_2_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.39,
   "yaw": -61.28
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3BEA210F_3480_83D0_41C2_D74AA1A288C5",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF975580_A272_7F67_41D1_7924A08C399C, this.camera_272A6786_3480_8ED0_41AA_1833DA0A337C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_1_HS_3_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.4,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.79,
   "yaw": -124.1
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3BEA310F_3480_83D0_41C4_63CCF3140EA9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.4,
   "yaw": -124.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8, this.camera_27B3C746_3480_8E53_41AD_676E173FA893); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.42,
   "yaw": 85.08
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3AA1B31A_3481_87F0_41AF_2748C28AC18C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 85.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA1931A_3481_87F0_41B0_A185EB42ED98_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3960193F_3480_8231_41C5_E1EA9498880E, this.camera_27C2474C_3480_8E57_41C1_683450B733E2); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.65,
   "yaw": 96
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3AA00E5A_3481_9E70_4188_6C9CAE0526D2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.43,
   "yaw": 96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BE9C10F_3480_83D0_41C7_6B7F6D82488E, this.camera_27AEA730_3480_8FCF_41AB_EA1A76663A5E); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.97,
   "yaw": -173.33
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3960F93F_3480_8231_41C5_CBCA85B23B1B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -173.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AA0DE5A_3481_9E70_41AA_0C87034CC905, this.camera_279C872A_3480_8FD3_41C9_E4256A471CA0); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_1_HS_1_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.34,
   "yaw": -86.55
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3960C93F_3480_8231_41C7_8D3A8B627071",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -86.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3960193F_3480_8231_41C5_E1EA9498880E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "backgroundOpacity": 0,
 "width": "17.15%",
 "class": "IconButton",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": "76.75%",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
 "paddingTop": 0,
 "shadow": false,
 "cursor": "hand",
 "data": {
  "name": "IconButton8475"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_8F89C3CC_82FC_16D0_41D7_BC36C46F28BB",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF975580_A272_7F67_41D1_7924A08C399C, this.camera_20A6D7B7_3480_8E30_41B0_4B054DE2E9EE); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.95,
   "yaw": -143.83
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B3E5BC6E_A273_ADBA_41B9_E6D56F20E2DE",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -143.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C, this.camera_209647B2_3480_8E30_4187_0F726314BBE5); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0_HS_1_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.37,
   "yaw": -77.86
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_25AAF69E_3480_8EF3_41B8_36C0BA77D737",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -77.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_279CF72A_3480_8FD3_41C8_6BA39E941366",
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A1506B4_3480_8E30_41C7_C143D81288EE, this.camera_2087E7AC_3480_8ED0_4197_0C43E9DA1270); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.76,
   "yaw": -175.1
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3AF632F4_3481_8630_41C6_830DA6D7B402",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.43,
   "yaw": -175.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B25D3A6A_A276_75BA_41DB_6951371B4C74, this.camera_20EC27CD_3480_8E50_41A3_7C21EC7A4779); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.43,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.97,
   "yaw": 16.73
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_24AFC420_3480_81D0_41C9_F87ABB9551D7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.43,
   "yaw": 16.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_1_HS_1_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 9.92,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 18.23,
   "yaw": 103.94
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_26F508A5_3481_82D0_41B8_DBFCD0707FAB",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.92,
   "yaw": 103.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 18.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_24C41D8E_3480_82D0_41C8_3C85EF871F1C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8, this.camera_20DD57C8_3480_8E50_41BF_2038902AE073); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.34,
   "yaw": -127.3
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3A1576B4_3480_8E30_41A0_A8B1D39E3715",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AF6D2F4_3481_8630_41C2_FB5C5FA42BB8, this.camera_20CA57C2_3480_8E50_41A8_15CFE110EB16); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_1_HS_1_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.15,
   "yaw": -163.3
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3A1546B4_3480_8E30_41B4_F9519DAF227E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -163.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A1506B4_3480_8E30_41C7_C143D81288EE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_39DFD842_3487_8250_41B6_3A9D167E70F8, this.camera_27F9176C_3480_8E50_41C7_80FD3F96C23E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_1_HS_0_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "hfov": 10.44,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.82,
   "yaw": 117.38
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_39668B1B_3480_87F0_41BA_8DC39CFF0E44",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 117.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_39665B1B_3480_87F0_419D_E606F50A4EE2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "children": [
  "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
  "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
  "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930"
 ],
 "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "75.269%",
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "horizontal",
 "horizontalAlign": "right",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "-Hide buttons"
 }
},
{
 "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "class": "Container",
 "borderRadius": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "55.435%",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Container Content"
 }
}],
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player463"
 },
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; }
 },
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "downloadEnabled": false,
 "gap": 10,
 "layout": "absolute",
 "height": "100%",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "paddingTop": 0,
 "shadow": false,
 "backgroundPreloadEnabled": true
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
