import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Motion For WP – hello from the editor!', 'motion-for-wp' ) }
		</p>
	);
}
