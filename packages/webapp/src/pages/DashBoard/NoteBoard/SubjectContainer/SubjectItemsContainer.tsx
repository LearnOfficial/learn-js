import { PlusIconSVG, StaticImage } from '@learn/ui';
import { MutableRefObject, useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SubjectItem } from './SubjectItem';
import { Slider, SliderRef } from '../../components/slider';

export type SubjectItemsContainerProps = {
  onAdd?: () => void;
  data: MutableRefObject<any[]>;
};

export function SubjectItemsContainer({
  onAdd,
  data
}: SubjectItemsContainerProps) {
  const sliderRef = useRef<SliderRef>(null);

  return (
    <>
      {/**
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
      **/}
      <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
        <Slider
          contentContainerStyle={{
            gap: 20
          }}
          keyExtractor={(item) => item.id}
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

        <View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: 'black',
              borderRadius: 10,
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
              <PlusIconSVG size={15} color={'white'} />
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}
