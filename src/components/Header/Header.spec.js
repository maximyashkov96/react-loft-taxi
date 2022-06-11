import React from 'react';
import Header from './Header'

import { render, fireEvent, screen } from '@testing-library/react'

const navigateToNextPage = jest.fn();

describe('when click on nav buttons', () => {
    it('open the corresponding page', () => {

        render(<Header navigateToNextPage={navigateToNextPage}/>)

        fireEvent.click(screen.getByText('Карта'))
        expect(navigateToNextPage).toHaveBeenCalledWith('map');
        fireEvent.click(screen.getByText('Профиль'))
        expect(navigateToNextPage).toHaveBeenCalledWith('profile');
        fireEvent.click(screen.getByText('Войти'))
        expect(navigateToNextPage).toHaveBeenCalledWith('registration');
        ;
    })
})
