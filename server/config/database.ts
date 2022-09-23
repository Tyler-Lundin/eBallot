import mongoose from 'mongoose'

const connectMessage = () => {
  console.log('\x1b[42m', `CONNECTED TO DATABASE`, '\x1b[0m')
}

export const ConnectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, connectMessage)
  } catch (err: any) {
    console.error(err.message)
    process.exit(1)
  }
}
