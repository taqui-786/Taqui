import { Plus } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'


function QuoteSection() {
  return (
    <div className=" w-full mt-16">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-4 border-y px-4 py-8 dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
			<HugeiconsIcon icon={Plus}
				className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
				strokeWidth={1}
			/>
			<HugeiconsIcon icon={Plus}
				className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
				strokeWidth={1}
			/>
			<HugeiconsIcon icon={Plus}
				className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
				strokeWidth={1}
			/>
			<HugeiconsIcon icon={Plus}
				className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
				strokeWidth={1}
			/>

			<div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
			<div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

 
		 <div className="py-4 sm:py-6 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0"></div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-4xl text-subtle mb-4 sm:mb-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <blockquote className="relative z-10 max-w-2xl px-1 sm:px-4">
              <p className="text-xl sm:text-3xl font-bold font-instrument-serif tracking-wider italic text-title leading-relaxed">
                "Do so much work that it would be unreasonable for you to not be
                successful."
              </p>
            </blockquote>
            <div className="sm:mt-8 mt-6 flex items-center gap-3 z-10">
              <div className="h-px w-8 bg-subtle"></div>
              <span className="text-xs sm:text-sm font-semibold text-subtle uppercase tracking-widest">
                Alex Hormozi
              </span>
              <div className="h-px w-8 bg-subtle"></div>
            </div>
          </div>
		</div>
         
        </div>
  )
}

export default QuoteSection