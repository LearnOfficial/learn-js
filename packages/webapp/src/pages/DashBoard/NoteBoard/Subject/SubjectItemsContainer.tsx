import { StaticImage } from '@learn/ui';
import { MutableRefObject, useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SubjectItem } from './SubjectItem';
import { Slider } from '../../components/slider';

export type SubjectItemsContainerProps = {
  onAdd?: () => void;
  data: MutableRefObject<any[]>;
};

export function SubjectItemsContainer({
  onAdd,
  data
}: SubjectItemsContainerProps) {
  const sliderRef = useRef<Slider>(null);

  return (
    <>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Pressable
          onPress={() => {
            sliderRef.current?.toBeforeItem();
          }}
        >
          <Text>Before</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            sliderRef.current?.toNextItem();
          }}
        >
          <Text>Next</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
        <Slider
          contentContainerStyle={{
            gap: 20
          }}
          ref={sliderRef}
          data={data}
          renderItem={({ item, index }) => (
            <SubjectItem
              title={item.title}
              backgroundColor={item.backgroundColor}
              index={index}
              sliderRef={sliderRef}
            />
          )}
        />

        <Pressable
          style={{
            padding: 5,
            backgroundColor: 'black',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            if (onAdd) {
              onAdd();
              sliderRef.current?.refresh();
              sliderRef.current?.toFirstItem();
            }
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <StaticImage size={30} image="AddIcon" />
          </View>
        </Pressable>
      </View>
    </>
  );
}
