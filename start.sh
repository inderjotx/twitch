docker start 61259c8e37fb 
npx drizzle-kit studio > /dev/null 2>&1 &
ngrok http --domain=kind-goose-loving.ngrok-free.app 3000  > /dev/null 2>&1 &
echo "https://kind-goose-loving.ngrok-free.app"
npm run dev
