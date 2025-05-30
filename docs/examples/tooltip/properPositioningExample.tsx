import { useState } from 'react';
import { Box, Flex, Icon, IconButton, RadioGroup, Text, Tooltip } from 'gestalt';

export default function Example() {
  const [content, setContent] = useState<string | null>(null);
  const [claimed, setClaimed] = useState<string | null>(null);
  const [device, setDevice] = useState<string | null>(null);

  return (
    <Box alignItems="center" display="flex" height="100%" justifyContent="center" padding={8}>
      <Flex direction="column" gap={{ column: 4, row: 0 }} width={300}>
        <Flex direction="column" gap={{ column: 2, row: 0 }}>
          <Flex alignItems="center" gap={{ row: 1, column: 0 }}>
            <Text size="400" weight="bold">
              Content type
            </Text>
            <Tooltip
              idealDirection="right"
              text="See stats about different types of content created by you and/or others on Pinterest. Filter to get more details on your organic (not an ad) and paid (promoted as an ad) content."
            >
              <IconButton
                accessibilityLabel="Information"
                bgColor="white"
                icon="info-circle"
                iconColor="darkGray"
              />
            </Tooltip>
          </Flex>
          <RadioGroup id="Content" legend="Content">
            <RadioGroup.RadioButton
              checked={content === 'all'}
              id="allcontent"
              label="All"
              name="content"
              onChange={() => setContent('all')}
              value="all"
            />
            <RadioGroup.RadioButton
              checked={content === 'organic'}
              id="organic"
              label="Organic"
              name="content"
              onChange={() => setContent('organic')}
              value="organic"
            />
            <RadioGroup.RadioButton
              checked={content === 'paid'}
              id="paid"
              label="Paid and earned"
              name="content"
              onChange={() => setContent('paid')}
              value="paid"
            />
          </RadioGroup>
        </Flex>
        <Flex direction="column" gap={{ column: 2, row: 0 }}>
          <Flex alignItems="center" gap={{ row: 1, column: 0 }}>
            <Text size="400" weight="bold">
              Claimed account
            </Text>
            <Tooltip
              idealDirection="right"
              text="See stats for Pins linked to your claimed accounts like websites, Etsy, Instagram or Youtube. The Other Pins category includes Pins you’ve published or saved that don’t link to any of your claimed accounts."
            >
              <Icon accessibilityLabel="Information" color="default" icon="info-circle" />
            </Tooltip>
          </Flex>
          <RadioGroup id="pins" legend="Pins status">
            <RadioGroup.RadioButton
              checked={claimed === 'all'}
              id="allclaimed"
              label="All Pins"
              name="claimed"
              onChange={() => setClaimed('all')}
              value="all"
            />
            <RadioGroup.RadioButton
              checked={claimed === 'instagram'}
              id="instagram"
              label="Instagram"
              name="claimed"
              onChange={() => setClaimed('instagram')}
              value="instagram"
            />
            <RadioGroup.RadioButton
              checked={claimed === 'other'}
              id="other"
              label="Other pins"
              name="claimed"
              onChange={() => setClaimed('other')}
              value="other"
            />
          </RadioGroup>
        </Flex>
        <Flex direction="column" gap={{ column: 2, row: 0 }}>
          <Flex alignItems="center" gap={{ row: 1, column: 0 }}>
            <Text size="400" weight="bold">
              Device
            </Text>
            <Tooltip
              idealDirection="right"
              text="See stats for the different devices your Pinterest traffic is coming from."
            >
              <Icon accessibilityLabel="Information" color="default" icon="info-circle" />
            </Tooltip>
          </Flex>
          <RadioGroup id="pins" legend="Pins status">
            <RadioGroup.RadioButton
              checked={device === 'all'}
              id="alldevices"
              label="All"
              name="device"
              onChange={() => setDevice('all')}
              value="all"
            />
            <RadioGroup.RadioButton
              checked={device === 'mobile'}
              id="mobile"
              label="Mobile"
              name="device"
              onChange={() => setDevice('mobile')}
              value="mobile"
            />
            <RadioGroup.RadioButton
              checked={device === 'desktop'}
              id="desktop"
              label="Desktop"
              name="device"
              onChange={() => setDevice('desktop')}
              value="desktop"
            />
            <RadioGroup.RadioButton
              checked={device === 'tablet'}
              id="tablet"
              label="Tablet"
              name="device"
              onChange={() => setDevice('tablet')}
              value="tablet"
            />
          </RadioGroup>
        </Flex>
      </Flex>
    </Box>
  );
}
