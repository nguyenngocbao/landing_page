// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const helloAPI = (req, res) =>{
  res.status(200).json({ name: 'Steve' })
}

export default helloAPI;