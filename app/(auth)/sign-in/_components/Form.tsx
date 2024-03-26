import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Form = () => {
    return (
        <div className='w-[70%] mx-auto flex justify-center items-center h-[500px]'>
            <form action="" className='w-[500px] shadow-md p-10'>
                <div>
                    <h1 className='font-bold text-lg my-2'>Please sign in</h1>
                    <p className='text-sm'>To access the private page you have to be authenticated</p>
                </div>
                <div className="my-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="my-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="Password" id="Password" placeholder="Enter your password" />
                </div>
                <div className='my-3'>
                    <Button>Login</Button>
                </div>
            </form>
        </div>
    )
}

export default Form