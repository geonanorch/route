# ルーティング

ルーターはURLと「戻るボタン」を扱うための、汎用的なツールです。Riotのルーターは、IE9を含むすべてのブラウザで動かすための、最小の実装になっています。次のことが可能です:

1. URLのハッシュ部分を変更
2. ハッシュの変更を通知
3. 現在のハッシュを調べる

ルーティングのロジックはどこにでも置くことができます。カスタムタグでも、非UIモジュールでも構いません。ルーターを、各部分に指示を出すための、アプリケーションの中心的な要素と位置付けるアプリケーションフレームワークもあります。一方で、URLイベントをキーボートイベントと同じように扱って、アプリケーションの全体的なアーキテクチャを変えないというアプローチもあります。(訳注: どういった設計にするかは、開発者に委ねられています)

ロケーションバーには常にURLが表示されているわけですから、どんなブラウザアプリケーションにもルーティングは必要です。