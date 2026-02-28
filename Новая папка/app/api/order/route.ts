import { PrismaClient } from "@prisma/client"
import { sendTelegram } from "@/lib/telegram"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const body = await req.json()

  const order = await prisma.order.create({
    data: {
      product: body.product,
      tradeUrl: body.tradeUrl
    }
  })

  await sendTelegram(
    `Новый заказ!\nТовар: ${body.product}\nTrade URL: ${body.tradeUrl}`
  )

  return Response.json(order)
}