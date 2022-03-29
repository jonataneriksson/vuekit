<?php

return [
    'debug' => true,
    'api' => [
      'csrf' => 'test',
    ],
    'panel' => [
      'css' => 'assets/css/panel.css'
    ],
    'thumbs' => [
      'driver' => 'im',
      'bin' => '/usr/local/bin/convert',
      'widths' => ['352','864','1408','2048'],
      'srcsets' => [
        'default' => [
          '352w' => ['width' => 352, 'quality' => 80],
          '864w' => ['width' => 864, 'quality' => 100],
          '1408w' => ['width' => 1408, 'quality' => 100],
          '2048w' => ['width' => 2048, 'quality' => 80]
        ]
      ],
    ],
    'pedroborges.meta-tags.templates' => function ($page, $site) {
      return [
          'default' => [ // template name
              'title' => $site->title() . " – " . $page->title(),
              'meta' => [
                'title' => $site->title() . " – " . $page->title(),
                'description' => $site->introduction()->excerpt()
              ],
              'og' => [
                  'title' => $site->title() . " – " . $page->title(),
                  'namespace:image' => function($page, $site) {
                      $image = $site->cover()->toFile();
                      if($image) return [ 'image' => $image->thumb(['height' => 315])->url() ];
                  },
                  'description' => $site->introduction()->excerpt()
              ],
              'twitter' => [
                  'title' => $site->title() . " - " . $page->title(),
                  'namespace:image' => function($page, $site) {
                      $image = $site->cover()->toFile();
                      if($image) return [ 'image' => $image->thumb(['height' => 315])->url() ];
                  },
                  'description' => $site->introduction()->excerpt()
              ]
          ],
      ];
    },
];
