import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';
import Avatar from '../components/Avatar'

type Props = {
  post: Post
}

const Post = ({ post }: Props) => {
  return (
    <div className='flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600'>
      <div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
        <ArrowUpIcon className='voteButtons hover:text-red-400' />
        <p className='text-xs font-bold text-black'>0</p>
        <ArrowDownIcon className='voteButtons hover:text-blue-400' />
      </div>
      <div>
        <div>
          <Avatar seed={post.subreddit[0]?.topic} />
          <p>
            <span>r/{post.subreddit[0]?.topic}</span> . Posted by u/{post.username}
          </p>
        </div>
        <div>body</div>
        <div>image</div>
        <div>footer</div>
      </div>
    </div>
  )
}

export default Post