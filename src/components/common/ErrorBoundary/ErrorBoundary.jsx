
import React, { Component } from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    // Jodi kono error hoy, eta state update korbe
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    // Error details log korar jonno (e.g., Sentry ba Console-e)
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
        // Error hole eii fallback UI-ti dekhabe
        return (
            <Box 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                minH="100vh" 
                p={5}
            >
            <VStack spacing={4} textAlign="center">
                <Heading as="h2" size="xl" color="red.500">
                    Oops! Something went wrong.
                </Heading>
                <Text fontSize="lg" color="gray.600">
                    We encountered an unexpected error. Please try refreshing the page.
                </Text>
                <Button 
                    colorScheme="blue" 
                    onClick={() => window.location.reload()}
                >
                    Reload Page
                </Button>
            </VStack>
            </Box>
        );
        }

        // Jodi error na hoy, tobe normal components render hobe
        return this.props.children;
    }
}

export default ErrorBoundary;