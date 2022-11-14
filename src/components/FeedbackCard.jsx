import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col p-8 rounded-[20px]  mr-0 feedback-card min-h-[350px] mb-20">
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white flex-1 line-clamp-6">
      {content}
    </p>
    <div className="flex flex-row flex-shrink-0 mt-auto items-center">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col justify-between ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white line-clamp-1">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite line-clamp-1">
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default FeedbackCard
