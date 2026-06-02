
import React from 'react';
import { HStack, Button, IconButton, Text } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * @param {number} totalPages - Mot koto gulo page ache
 * @param {number} currentPage - Bartoman kon page-e user ache
 * @param {function} onPageChange - Page change korle je function run hobe
 */
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Page numbers create korar logic
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages <= 1) return null; // Ekta page thakle pagination dekhabor dorkar nei

    return (
        <HStack spacing={2} justifyContent="center" py={4}>
        {/* Previous Button */}
        <IconButton
            icon={<FiChevronLeft />}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            variant="outline"
        />

        {/* Page Numbers */}
        {pages.map((page) => (
            <Button
            key={page}
            onClick={() => onPageChange(page)}
            colorScheme={currentPage === page ? "blue" : "gray"}
            variant={currentPage === page ? "solid" : "outline"}
            size="sm"
            >
            {page}
            </Button>
        ))}

        {/* Next Button */}
        <IconButton
            icon={<FiChevronRight />}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
            variant="outline"
        />
        </HStack>
    );
};

export default Pagination;