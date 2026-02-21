import PropTypes from 'prop-types'
import { BiSolidCommentDots } from 'react-icons/bi'

const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  authorName,
  onAuthorNameChange,
  commentContent,
  onCommentContentChange,
}) => {
  if (!isOpen) return null

  return (
    <>
      <div
        className='bg-opacity-50 fixed inset-0 z-40 bg-black/30'
        onClick={onClose}
      ></div>

      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='mx-4 w-full max-w-md rounded-2xl bg-white p-6'>
          <p className='flex items-center justify-center gap-2 text-lg font-semibold'>
            <BiSolidCommentDots className='size-6' /> Add Review
          </p>

          <form onSubmit={onSubmit} className='mt-4 flex flex-col gap-4'>
            <input
              type='text'
              className='rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-gray-500 focus:outline-none'
              placeholder='Name'
              required
              value={authorName}
              onChange={(e) => onAuthorNameChange(e.target.value)}
            />
            <textarea
              type='text'
              className='rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-gray-500 focus:outline-none'
              placeholder='Review'
              required
              value={commentContent}
              onChange={(e) => onCommentContentChange(e.target.value)}
            />

            <div className='mt-4 flex justify-end gap-4'>
              <button
                type='button'
                className='rounded-lg border border-gray-700 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700'
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

ProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authorName: PropTypes.string.isRequired,
  onAuthorNameChange: PropTypes.func.isRequired,
  commentContent: PropTypes.string.isRequired,
  onCommentContentChange: PropTypes.func.isRequired,
}

export default ProductModal
