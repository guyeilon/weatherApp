import { motion } from 'framer-motion';
import * as Styled from './Svg.styles';

const Logo = () => {
	const pathVariants = {
		hidden: {
			opacity: 0,
			pathLength: 0,
			fill: 'none',
			y: 30,
		},
		visible: {
			fill: '#fff',
			opacity: 1,
			pathLength: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: 'easeInOut',
				delay: 0.5,
			},
		},
	};
	const moonVariants = {
		hidden: {
			fill: 'transparent',
			rotate: -180,
			opacity: 0,
			pathLength: 0,
			stroke: 'none',
		},
		visible: {
			stroke: '#FBFF22',

			opacity: 1,
			pathLength: 1,
			rotate: 0,
			transition: {
				duration: 1,
			},
		},
	};
	const moonVariants2 = {
		hidden: {
			fill: 'transparent',
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			fill: '#FBFF22',
			opacity: 1,
			pathLength: 1,

			transition: {
				duration: 0.5,
				delay: 1,
				ease: 'easeIn',
			},
		},
	};
	const moonVariants3 = {
		hidden: {
			fill: 'transparent',
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			fill: '#FBFF22',
			opacity: 1,
			pathLength: 1,

			transition: {
				duration: 0.7,
				delay: 1.5,
				ease: 'easeOut',
			},
		},
	};
	return (
		<Styled.LogoWrapper>
			<motion.svg fill='none' xmlns='http://www.w3.org/2000/svg'>
				<motion.mask id='path-1-inside-1_3_8' fill='white'>
					<motion.path
						d='M3.881 81.669L0 63.412H4.062L5.952 73.141C5.986 73.262 6.012 73.427 6.029 73.636C6.046 73.845 6.063 73.984 6.081 74.053C6.098 73.966 6.115 73.819 6.132 73.61C6.15 73.401 6.175 73.227 6.21 73.088L8.513 63.412H11.954L14.283 73.114C14.318 73.271 14.352 73.462 14.387 73.688C14.421 73.914 14.438 74.053 14.438 74.106C14.4599 74.0112 14.4772 73.9154 14.49 73.819C14.507 73.697 14.524 73.584 14.542 73.48L14.594 73.167L16.456 63.412H20.519L16.612 81.669H12.886L10.35 71.523C10.2871 71.1858 10.2354 70.8466 10.195 70.506C10.125 71.097 10.074 71.428 10.04 71.497L7.607 81.669H3.881ZM27.424 81.982C25.475 81.982 23.94 81.365 22.819 80.131C21.697 78.896 21.137 77.183 21.137 74.992C21.137 72.854 21.697 71.158 22.818 69.906C23.957 68.654 25.492 68.028 27.424 68.028C29.184 68.028 30.615 68.567 31.719 69.645C32.823 70.724 33.375 72.289 33.375 74.34C33.375 75.192 33.341 75.844 33.272 76.296H24.81C24.844 77.131 25.103 77.757 25.586 78.174C26.069 78.574 26.682 78.774 27.423 78.774C28.631 78.774 29.623 78.305 30.399 77.366L32.572 79.557C31.244 81.174 29.528 81.982 27.423 81.982H27.424ZM24.837 73.454H29.779C29.589 71.976 28.752 71.237 27.269 71.237C26.596 71.237 26.044 71.436 25.613 71.836C25.182 72.219 24.923 72.758 24.837 73.454ZM43.968 81.669V80.678C43.174 81.548 42.078 81.982 40.681 81.982C39.215 81.982 38.016 81.609 37.085 80.861C36.171 80.096 35.714 79.009 35.714 77.601C35.714 76.227 36.248 75.175 37.318 74.445C38.388 73.697 39.638 73.323 41.07 73.323C42.312 73.323 43.278 73.48 43.968 73.793V73.062C43.968 72.454 43.778 71.993 43.398 71.68C43.018 71.35 42.493 71.184 41.82 71.184C40.388 71.184 38.974 71.654 37.577 72.593L36.412 69.698C38.034 68.585 39.922 68.028 42.079 68.028C45.822 68.028 47.694 69.767 47.694 73.245V81.669H43.968ZM41.406 78.8C42.337 78.8 43.191 78.487 43.968 77.861V76.662C43.2369 76.4473 42.478 76.3418 41.716 76.349C40.164 76.349 39.388 76.775 39.388 77.627C39.388 78.409 40.06 78.8 41.406 78.8ZM55.307 81.982C53.082 81.982 51.969 80.765 51.969 78.331V71.654H50.158V68.341H51.969V64.638L55.695 62.838V68.341H58.567V71.654H55.695V77.966C55.695 78.209 55.765 78.4 55.902 78.54C56.0571 78.6612 56.2492 78.7255 56.446 78.722C57.205 78.722 57.964 78.548 58.723 78.2L58.309 81.383C57.498 81.782 56.497 81.982 55.307 81.982ZM61.708 81.669V64.586L65.46 62.838V69.567C66.305 68.541 67.504 68.028 69.056 68.028C70.281 68.028 71.35 68.42 72.265 69.202C73.179 69.985 73.636 71.254 73.636 73.01V81.669H69.884V74.523C69.884 73.532 69.72 72.81 69.392 72.358C69.082 71.906 68.547 71.68 67.788 71.68C66.236 71.68 65.46 72.61 65.46 74.471V81.669H61.708ZM83.04 81.982C81.09 81.982 79.556 81.365 78.434 80.131C77.314 78.896 76.753 77.183 76.753 74.992C76.753 72.854 77.313 71.158 78.434 69.906C79.573 68.654 81.108 68.028 83.04 68.028C84.8 68.028 86.231 68.567 87.335 69.645C88.439 70.724 88.991 72.289 88.991 74.34C88.991 75.192 88.957 75.844 88.888 76.296H80.427C80.461 77.131 80.72 77.757 81.203 78.174C81.686 78.574 82.298 78.774 83.04 78.774C84.248 78.774 85.24 78.305 86.016 77.366L88.189 79.557C86.861 81.174 85.145 81.982 83.04 81.982ZM80.453 73.454H85.395C85.205 71.976 84.368 71.237 82.885 71.237C82.212 71.237 81.66 71.436 81.229 71.836C80.798 72.219 80.539 72.758 80.453 73.454ZM92.106 81.669V68.341H95.858V69.541C96.03 69.193 96.341 68.854 96.789 68.524C97.237 68.194 97.764 68.028 98.367 68.028C99.402 68.028 100.274 68.402 100.981 69.15L100.489 72.593C99.765 71.984 98.979 71.68 98.134 71.68C96.617 71.68 95.858 72.601 95.858 74.445V81.669H92.106ZM114.277 81.669L112.932 78.122H106.127L104.781 81.669H100.486L107.628 63.412H111.405L118.573 81.669H114.277ZM111.612 74.471L110.06 70.532C109.849 70.0298 109.668 69.516 109.516 68.993C109.447 69.289 109.266 69.802 108.973 70.532L107.421 74.471H111.612ZM127.378 81.982C126.24 81.982 125.368 81.591 124.765 80.809V85.164L121.013 86.86V68.341H124.765V69.254C125.351 68.437 126.24 68.028 127.43 68.028C129.086 68.028 130.405 68.637 131.389 69.854C132.389 71.054 132.889 72.775 132.889 75.018C132.889 77.157 132.372 78.853 131.337 80.104C130.302 81.356 128.982 81.982 127.378 81.982ZM126.783 78.331C127.525 78.331 128.103 78.044 128.517 77.47C128.931 76.879 129.138 76.062 129.138 75.018C129.138 72.793 128.353 71.68 126.783 71.68C125.938 71.68 125.265 71.949 124.765 72.488V77.47C124.868 77.696 125.101 77.896 125.463 78.07C125.826 78.244 126.265 78.331 126.783 78.331ZM142.489 81.982C141.35 81.982 140.479 81.591 139.875 80.809V85.164L136.123 86.86V68.341H139.875V69.254C140.462 68.437 141.35 68.028 142.54 68.028C144.196 68.028 145.516 68.637 146.499 69.854C147.5 71.054 148 72.775 148 75.018C148 77.157 147.482 78.853 146.447 80.104C145.413 81.356 144.093 81.982 142.489 81.982ZM141.893 78.331C142.635 78.331 143.213 78.044 143.627 77.47C144.041 76.879 144.248 76.062 144.248 75.018C144.248 72.793 143.463 71.68 141.893 71.68C141.048 71.68 140.376 71.949 139.875 72.488V77.47C139.979 77.696 140.212 77.896 140.574 78.07C140.936 78.244 141.376 78.331 141.893 78.331Z'
						variants={pathVariants}
						initial='hidden'
						animate='visible'
					/>
				</motion.mask>
				<motion.path
					d='M3.881 81.669L0 63.412H4.062L5.952 73.141C5.986 73.262 6.012 73.427 6.029 73.636C6.046 73.845 6.063 73.984 6.081 74.053C6.098 73.966 6.115 73.819 6.132 73.61C6.15 73.401 6.175 73.227 6.21 73.088L8.513 63.412H11.954L14.283 73.114C14.318 73.271 14.352 73.462 14.387 73.688C14.421 73.914 14.438 74.053 14.438 74.106C14.4599 74.0112 14.4772 73.9154 14.49 73.819C14.507 73.697 14.524 73.584 14.542 73.48L14.594 73.167L16.456 63.412H20.519L16.612 81.669H12.886L10.35 71.523C10.2871 71.1858 10.2354 70.8466 10.195 70.506C10.125 71.097 10.074 71.428 10.04 71.497L7.607 81.669H3.881ZM27.424 81.982C25.475 81.982 23.94 81.365 22.819 80.131C21.697 78.896 21.137 77.183 21.137 74.992C21.137 72.854 21.697 71.158 22.818 69.906C23.957 68.654 25.492 68.028 27.424 68.028C29.184 68.028 30.615 68.567 31.719 69.645C32.823 70.724 33.375 72.289 33.375 74.34C33.375 75.192 33.341 75.844 33.272 76.296H24.81C24.844 77.131 25.103 77.757 25.586 78.174C26.069 78.574 26.682 78.774 27.423 78.774C28.631 78.774 29.623 78.305 30.399 77.366L32.572 79.557C31.244 81.174 29.528 81.982 27.423 81.982H27.424ZM24.837 73.454H29.779C29.589 71.976 28.752 71.237 27.269 71.237C26.596 71.237 26.044 71.436 25.613 71.836C25.182 72.219 24.923 72.758 24.837 73.454ZM43.968 81.669V80.678C43.174 81.548 42.078 81.982 40.681 81.982C39.215 81.982 38.016 81.609 37.085 80.861C36.171 80.096 35.714 79.009 35.714 77.601C35.714 76.227 36.248 75.175 37.318 74.445C38.388 73.697 39.638 73.323 41.07 73.323C42.312 73.323 43.278 73.48 43.968 73.793V73.062C43.968 72.454 43.778 71.993 43.398 71.68C43.018 71.35 42.493 71.184 41.82 71.184C40.388 71.184 38.974 71.654 37.577 72.593L36.412 69.698C38.034 68.585 39.922 68.028 42.079 68.028C45.822 68.028 47.694 69.767 47.694 73.245V81.669H43.968ZM41.406 78.8C42.337 78.8 43.191 78.487 43.968 77.861V76.662C43.2369 76.4473 42.478 76.3418 41.716 76.349C40.164 76.349 39.388 76.775 39.388 77.627C39.388 78.409 40.06 78.8 41.406 78.8ZM55.307 81.982C53.082 81.982 51.969 80.765 51.969 78.331V71.654H50.158V68.341H51.969V64.638L55.695 62.838V68.341H58.567V71.654H55.695V77.966C55.695 78.209 55.765 78.4 55.902 78.54C56.0571 78.6612 56.2492 78.7255 56.446 78.722C57.205 78.722 57.964 78.548 58.723 78.2L58.309 81.383C57.498 81.782 56.497 81.982 55.307 81.982ZM61.708 81.669V64.586L65.46 62.838V69.567C66.305 68.541 67.504 68.028 69.056 68.028C70.281 68.028 71.35 68.42 72.265 69.202C73.179 69.985 73.636 71.254 73.636 73.01V81.669H69.884V74.523C69.884 73.532 69.72 72.81 69.392 72.358C69.082 71.906 68.547 71.68 67.788 71.68C66.236 71.68 65.46 72.61 65.46 74.471V81.669H61.708ZM83.04 81.982C81.09 81.982 79.556 81.365 78.434 80.131C77.314 78.896 76.753 77.183 76.753 74.992C76.753 72.854 77.313 71.158 78.434 69.906C79.573 68.654 81.108 68.028 83.04 68.028C84.8 68.028 86.231 68.567 87.335 69.645C88.439 70.724 88.991 72.289 88.991 74.34C88.991 75.192 88.957 75.844 88.888 76.296H80.427C80.461 77.131 80.72 77.757 81.203 78.174C81.686 78.574 82.298 78.774 83.04 78.774C84.248 78.774 85.24 78.305 86.016 77.366L88.189 79.557C86.861 81.174 85.145 81.982 83.04 81.982ZM80.453 73.454H85.395C85.205 71.976 84.368 71.237 82.885 71.237C82.212 71.237 81.66 71.436 81.229 71.836C80.798 72.219 80.539 72.758 80.453 73.454ZM92.106 81.669V68.341H95.858V69.541C96.03 69.193 96.341 68.854 96.789 68.524C97.237 68.194 97.764 68.028 98.367 68.028C99.402 68.028 100.274 68.402 100.981 69.15L100.489 72.593C99.765 71.984 98.979 71.68 98.134 71.68C96.617 71.68 95.858 72.601 95.858 74.445V81.669H92.106ZM114.277 81.669L112.932 78.122H106.127L104.781 81.669H100.486L107.628 63.412H111.405L118.573 81.669H114.277ZM111.612 74.471L110.06 70.532C109.849 70.0298 109.668 69.516 109.516 68.993C109.447 69.289 109.266 69.802 108.973 70.532L107.421 74.471H111.612ZM127.378 81.982C126.24 81.982 125.368 81.591 124.765 80.809V85.164L121.013 86.86V68.341H124.765V69.254C125.351 68.437 126.24 68.028 127.43 68.028C129.086 68.028 130.405 68.637 131.389 69.854C132.389 71.054 132.889 72.775 132.889 75.018C132.889 77.157 132.372 78.853 131.337 80.104C130.302 81.356 128.982 81.982 127.378 81.982ZM126.783 78.331C127.525 78.331 128.103 78.044 128.517 77.47C128.931 76.879 129.138 76.062 129.138 75.018C129.138 72.793 128.353 71.68 126.783 71.68C125.938 71.68 125.265 71.949 124.765 72.488V77.47C124.868 77.696 125.101 77.896 125.463 78.07C125.826 78.244 126.265 78.331 126.783 78.331ZM142.489 81.982C141.35 81.982 140.479 81.591 139.875 80.809V85.164L136.123 86.86V68.341H139.875V69.254C140.462 68.437 141.35 68.028 142.54 68.028C144.196 68.028 145.516 68.637 146.499 69.854C147.5 71.054 148 72.775 148 75.018C148 77.157 147.482 78.853 146.447 80.104C145.413 81.356 144.093 81.982 142.489 81.982ZM141.893 78.331C142.635 78.331 143.213 78.044 143.627 77.47C144.041 76.879 144.248 76.062 144.248 75.018C144.248 72.793 143.463 71.68 141.893 71.68C141.048 71.68 140.376 71.949 139.875 72.488V77.47C139.979 77.696 140.212 77.896 140.574 78.07C140.936 78.244 141.376 78.331 141.893 78.331Z'
					fill='white'
					stroke='white'
					strokeWidth='2'
					mask='url(#path-1-inside-1_3_8)'
					variants={pathVariants}
					initial='hidden'
					animate='visible'
				/>

				<motion.path
					id='Vector_2'
					d='M95.6645 39.5643C97.9751 38.7165 100.166 37.5794 102.185 36.1825C99.0051 41.7972 93.9073 46.3537 87.4064 48.7458C72.8728 54.0926 56.8278 46.5905 51.5694 31.9856L51.099 32.155L51.5694 31.9856C47.6474 21.0931 50.8338 9.32335 58.7389 1.82537C56.3225 8.15462 56.0703 15.3473 58.5396 22.2054L58.5396 22.2054C63.9862 37.3304 80.6071 45.1054 95.6645 39.5643Z'
					fill='#FBFF22'
					stroke='#FBFF22'
					variants={moonVariants}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					id='Vector_3'
					d='M95.6645 39.5643C97.9751 38.7165 100.166 37.5794 102.185 36.1825C99.0051 41.7972 93.9073 46.3537 87.4064 48.7458C72.8728 54.0926 56.8278 46.5905 51.5694 31.9856L51.099 32.155L51.5694 31.9856C47.6474 21.0931 50.8338 9.32335 58.7389 1.82537C56.3225 8.15462 56.0703 15.3473 58.5396 22.2054L58.5396 22.2054C63.9862 37.3304 80.6071 45.1054 95.6645 39.5643Z'
					fill='#FBFF22'
					stroke='transparent'
					variants={moonVariants2}
					initial='hidden'
					animate='visible'
				/>

				<motion.g filter='url(#rz77pg29ta)'>
					<motion.path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M72.101 43.785a16.514 20.514 0 0 1-4.703 2.654c-8.573 3.135-18.046-1.288-21.158-9.878a16.55 16.55 0 0 1 .596-12.733c-5.363 4.323-7.661 11.739-5.184 18.575 3.112 8.59 12.585 13.013 27.158 9.878a16.517 16.517 0 0 0 9.291-8.496z'
						fill='#FBFF22'
						variants={moonVariants3}
						initial='hidden'
						animate='visible'
					/>
				</motion.g>

				<motion.defs>
					<motion.filter
						id='rz77pg29ta'
						x='.656'
						y='.828'
						width='111.446'
						height='109.461'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'>
						<motion.feFlood floodOpacity='0' result='BackgroundImageFix' />
						<motion.feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
						<motion.feGaussianBlur stdDeviation='20' result='effect1_foregroundBlur_8573_21951' />
					</motion.filter>
				</motion.defs>
			</motion.svg>
		</Styled.LogoWrapper>
	);
};

export default Logo;
