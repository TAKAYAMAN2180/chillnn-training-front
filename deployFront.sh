#!/bin/sh
s3Name=chillnn-takayaman2180-training-front-nuxt
profile=TAKAYAMAN_ADMIN

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

deploy() {
  # notification
#   curl -X POST --data-urlencode "payload={\"channel\": \"#05_chillnn_notify_deploy\", \"username\": \"chillnn-deploy-bot\", \"text\": \"<!here> :chillnn_admin: :${branch}: 環境のdeployを開始しました。\", \"icon_emoji\": \":chillnn_admin:\"}" https://hooks.slack.com/services/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 &&\
  # deploy
  yarn abr &&
  yarn build:${branch}
  aws s3 cp --recursive ./dist/ s3://${s3Name}-${branch}/ --cache-control "max-age=3600,public,immutable" --profile ${profile} &&
#   curl -X POST --data-urlencode "payload={\"channel\": \"#05_chillnn_notify_deploy\", \"username\": \"chillnn-deploy-bot\", \"text\": \"<!here> :chillnn_admin: :${branch}: 環境のdeployが完了しました。\", \"icon_emoji\": \":chillnn_admin:\"}" https://hooks.slack.com/services/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 &&\
  exit
}

if [ $branch = 'stg' ]; then
  deploy
elif [ $branch = 'prd' ]; then
  deploy
else
  branch="dev"
  deploy
fi
# curl -X POST --data-urlencode "payload={\"channel\": \"#05_chillnn_notify_deploy\", \"username\": \"chillnn-deploy-bot\", \"text\": \"<!here> :chillnn_admin: :${branch}: 環境のdeployに失敗しました。\", \"icon_emoji\": \":chillnn_admin:\"}" https://hooks.slack.com/services/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
