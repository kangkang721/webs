import { ChatGPTAPIBrowser } from 'chatgpt'

async function example() {
  // use puppeteer to bypass cloudflare (headful because of captchas)
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,//openAI账号
    password: process.env.OPENAI_PASSWORD//密码
  })

  await api.initSession()

  const result = await api.sendMessage('Hello World!')
  console.log(result.response)
}
