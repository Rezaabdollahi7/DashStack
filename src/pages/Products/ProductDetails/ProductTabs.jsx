import { useState } from 'react'
import ProductDescription from './ProductDescription'
import ProductReviews from './ProductReviews'
import ProductModal from './ProductModal'
import ProductCommentCard from './ProductCommentCard'
import { ProductComments } from '../../../constants/ProductComments'
import avatar1 from '../../../assets/icons/Products-comments/avatar-1.webp'

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isShowModal, setIsShowModal] = useState(false)
  const [usersComments, setUsersComments] = useState(ProductComments)
  const [commentAuthorName, setCommentAuthorName] = useState('')
  const [commentContent, setCommentContent] = useState('')
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const handleAddComment = (e) => {
    e.preventDefault()

    if (!commentAuthorName || !commentContent) {
      alert('Please enter both name and comment')
      return
    }

    const newComment = {
      id: usersComments.length + 1,
      name: commentAuthorName,
      commentText: commentContent,
      icon: avatar1,
      like: 0,
      disLike: 0,
      isVerify: false,
      star: 4,
      commentImages: [],
      date: new Date().toLocaleDateString('en-US', options),
    }

    setUsersComments((prev) => [...prev, newComment])
    setCommentAuthorName('')
    setCommentContent('')
    setIsShowModal(false)
  }

  const tabs = [
    {
      id: 0,
      label: 'Description',
      content: <ProductDescription />,
    },
    {
      id: 1,
      label: `Reviews(${usersComments.length})`,
      content: (
        <>
          <ProductReviews
            comments={usersComments}
            onOpenModal={() => setIsShowModal(true)}
          />
          <div className='comments-wrapper flex flex-col gap-12'>
            {usersComments.map((comment) => (
              <ProductCommentCard key={comment.id} {...comment} />
            ))}
          </div>
        </>
      ),
    },
  ]

  return (
    <div className='relative col-span-12 mx-auto mt-8 w-full rounded-2xl bg-white'>
      {/* تب‌ها */}
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`cursor-pointer px-6 py-3 text-sm font-medium transition-colors focus:outline-none ${
              activeTab === tab.id
                ? 'border-b-2 border-gray-600 text-gray-800'
                : 'text-gray-500 hover:border-gray-200 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای تب‌ها */}
      <div className='rounded-b-lg bg-white p-6 shadow-sm'>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>

      <ProductModal
        isOpen={isShowModal}
        onClose={() => setIsShowModal(false)}
        onSubmit={handleAddComment}
        authorName={commentAuthorName}
        onAuthorNameChange={setCommentAuthorName}
        commentContent={commentContent}
        onCommentContentChange={setCommentContent}
      />
    </div>
  )
}

export default ProductTabs
