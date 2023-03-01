import {render} from '@testing-library/react';
import Landing from './index';

describe('LandingPage', () => {
    it('loads landing page on first render', () => {
        const loadLanding = jest.fn().mockName('loadLanding');
        render(<Landing loadLanding={loadLanding} />);
});
});