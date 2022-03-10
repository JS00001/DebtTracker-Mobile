import ContentLoader, { Rect } from 'react-content-loader/native';

export default function (props) {
	return (
		<ContentLoader
			speed={2}
			width={375}
			height={600}
			viewBox='0 0 400 600'
			backgroundColor='#f7f7f7'
			foregroundColor='#E7E7E7'
			{...props}
		>
			<Rect x='65' y='6' rx='4' ry='4' width='328' height='70' />
			<Rect x='8' y='6' rx='4' ry='4' width='50' height='70' />
			<Rect x='65' y='93' rx='4' ry='4' width='328' height='70' />
			<Rect x='8' y='93' rx='4' ry='4' width='50' height='70' />
			<Rect x='65' y='180' rx='4' ry='4' width='328' height='70' />
			<Rect x='8' y='180' rx='4' ry='4' width='50' height='70' />
			<Rect x='65' y='267' rx='4' ry='4' width='328' height='70' />
			<Rect x='8' y='267' rx='4' ry='4' width='50' height='70' />
			<Rect x='65' y='354' rx='4' ry='4' width='328' height='70' />
			<Rect x='8' y='354' rx='4' ry='4' width='50' height='70' />
		</ContentLoader>
	);
}
