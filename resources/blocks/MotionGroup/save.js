import { useBlockProps } from '@wordpress/block-editor';
export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Motion For WP – hello from the saved content!' }
		</p>
	);
}
