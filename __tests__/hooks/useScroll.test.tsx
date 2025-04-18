import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, act } from '@testing-library/react';

describe('useScroll', () => {
    it('should respond to scroll events', () => {
        const { result } = renderHook(() => useScroll());

        act(() => {
        global.window.scrollY = 100; // Simula o scroll
        global.window.dispatchEvent(new Event('scroll')); // Dispara o evento de scroll
        });
        expect(result.current).toBe(true); // Verifica se o estado é true

        act (() => {
        global.window.scrollY = 0; // Simula o scroll para o topo
        global.window.dispatchEvent(new Event('scroll')); // Dispara o evento de scroll
        });

        expect(result.current).toBe(false); // Verifica se o estado é false
    });

    });