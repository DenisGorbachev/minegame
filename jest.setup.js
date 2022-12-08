import { getConfig } from 'zenbox-util/dotenv.cjs'

const setup = async () => {
  const config = getConfig()
  Object.assign(process.env, config)
}

export default setup
