'use client'

import Link from 'next/link'
import styles from './ServiceModalButton.module.scss'
import { Badge, Button, Tooltip } from '@nextui-org/react'

interface ServiceModalButtonProps {
  serviceName: string
  isDisabled?: boolean
  isBadge?: boolean
  title?: string
  content?: string
  url: string
}

export default function ServiceModalButton({
  serviceName,
  isDisabled,
  isBadge,
  title,
  content,
  url,
}: ServiceModalButtonProps): JSX.Element {
  const buttonStyle = isDisabled ? styles.disabled : styles.main

  return (
    <>
      {isBadge ? (
        <Badge content="신규" color="danger">
          <Tooltip
            color={'warning'}
            closeDelay={1000}
            content={
              <div className="px-1 py-2">
                <div className="text-small font-bold">{title}</div>
                <div className="text-tiny">{content}</div>
              </div>
            }
            placement={'bottom'}
          >
            <Button
              className={buttonStyle}
              radius="sm"
              size="lg"
              isDisabled={isDisabled}
            >
              <Link href={url}>{serviceName}</Link>
            </Button>
          </Tooltip>
        </Badge>
      ) : (
        <Tooltip
          color={'warning'}
          closeDelay={1000}
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">{title}</div>
              <div className="text-tiny">{content}</div>
            </div>
          }
          placement={'bottom'}
        >
          <Button
            className={buttonStyle}
            radius="sm"
            size="lg"
            isDisabled={isDisabled}
          >
            <Link href={url}>{serviceName}</Link>
          </Button>
        </Tooltip>
      )}
    </>
  )
}
