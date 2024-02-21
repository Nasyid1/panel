import React from 'react';
import { Route } from 'react-router';
import { SwitchTransition } from 'react-transition-group';
import Fade from '@/components/elements/Fade';
import styled from 'styled-components/macro';
import tw from 'twin.macro';

const StyledSwitchTransition = styled(SwitchTransition)`
    ${tw`relative`};

    & section {
        ${tw`absolute w-full top-0 left-0`};
    }
`;

const TransitionRouter: React.FC = ({ children }) => {
    return (
        <Route
            render={({ location }) => (
                <div
                    className='w-full h-full rounded-md'
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    }}
                >
                    <main
                        data-pyro-main=''
                        data-pyro-transitionrouter=''
                        className='relative inset-[1px] w-full h-full overflow-y-auto overflow-x-hidden rounded-md bg-[#080808]'
                    >
                        {children}
                    </main>
                </div>
            )}
        />
    );
};

export default TransitionRouter;
