import { Button, Typography } from '@mui/material'
import banner from '../assets/banner.png'
import { ArrowRightAltOutlined, TipsAndUpdates, Close } from '@mui/icons-material'

export default function Banner() {
  return (
    <div className='flex relative justify-start items-center w-full bg-dark_raisin_black rounded-md border-international_klein_blue border'>
        <img className='rounded-md w-1/4 h-full' src={banner} alt="" />
        <div className="flex justify-center items-center w-3/4">
            <div className="flex flex-col w-2/3">
                <Typography variant='body1'><TipsAndUpdates fontSize='small' sx={{mb:0.3, mr: 1, color: "green"}} />Automate Bookkeeping for Payouts</Typography>
                <Typography sx={{fontSize: 12, color: "#58637a"}} variant='body2'>Close your books 60% faster and with better accuracy by automating bookkeeping for you Payouts.</Typography>
            </div>
            <Button
                sx={{pt:1, textTransform: "capitalize", fontSize: 12}}
                variant='outlined'
                endIcon={<ArrowRightAltOutlined/>}
            >Connect Zoho Books</Button>
        </div>
        <Close sx={{position: "absolute", color: "#58637a", top: 5, right: 5}} fontSize='small' />
    </div>
  )
}