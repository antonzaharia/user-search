import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

const InfiniteTable = (props) => {
  const [pageCount, setPageCount] = useState(parseInt((props.itemCount - 1) / props.perPage) + 1)
  const [resettingObserver, setResettingObserver] = useState(true)

  const isMounted = useRef(false)

  const handleObserver = (entities) => {
    // Update page state
    const target = entities[0]
    if (target.isIntersecting) {
      setPageCount((_pageCount) => _pageCount + 1)
    }
  }

  // Only gets called if the target node changes i.e when it does from a div to null and vice versa
  const onRefChange = useCallback((node) => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    }

    if (node !== null) {
      // initialize IntersectionObserver
      // which checks if load more div comes into viewport (with option offsets)
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      const observer = new IntersectionObserver(handleObserver, options)
      if (isMorePages()) {
        observer.observe(node)
      }
    }
  }, [])

  const isMorePages = () => {
    return pageCount < parseInt(props.totalCount / props.perPage) + 1
  }

  useEffect(() => {
    if (pageCount > 1) {
      setResettingObserver(true)
    }
    setPageCount(1)
  }, [props.pageCountResetter])

  useEffect(() => {
    if (isMounted.current && !resettingObserver) {
      props.nextPage(pageCount)
    } else {
      isMounted.current = true
    }
    setResettingObserver(false)
  }, [pageCount])

  return (
    <React.Fragment>
      {props.children}
      {isMorePages() && (
        <React.Fragment>
          <div ref={onRefChange} />
          <div className="w-full text-center">Loading...</div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

InfiniteTable.propTypes = {
  children: PropTypes.element.isRequired,
  totalCount: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  pageCountResetter: PropTypes.any,
}

InfiniteTable.defaultProps = {
  pageCountResetter: '',
}

export default InfiniteTable
