<?php

namespace Gene\BlueFoot\Observer;

use Magento\Framework\Event\ObserverInterface;

/**
 * Class CheckLatestVersion
 *
 * @package Gene\BlueFoot\Observer
 *
 * @author Dave Macaulay <dave@gene.co.uk>
 */
class CheckLatestVersion implements ObserverInterface
{
    /**
     * @var \Gene\BlueFoot\Model\VersionFactory
     */
    protected $versionFactory;

    /**
     * CheckLatestVersion constructor.
     *
     * @param \Gene\BlueFoot\Model\VersionFactory $versionFactory
     */
    public function __construct(
        \Gene\BlueFoot\Model\VersionFactory $versionFactory
    ) {
        $this->versionFactory = $versionFactory;
    }

    /**
     * Save the page builder data
     *
     * @param \Magento\Framework\Event\Observer $observer
     *
     * @return $this
     */
    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        return $this->versionFactory->create()->checkVersion();
    }
}