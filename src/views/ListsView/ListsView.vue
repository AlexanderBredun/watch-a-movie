<template>
    <PageWrapper>
        <TabsList v-slot="{ Tab }">
            <component :is="Tab" name="Смотреть позже">
                <div class="wrapper">
                    <HighlightedList type="watchLater">
                        <template #heading>
                            Смотреть позже
                        </template>
                    </HighlightedList>
                </div>
            </component>
            <component :is="Tab" name="Избранные">
                <div class="wrapper">
                    <HighlightedList type="favorite">
                        <template #heading>
                            Избранные
                        </template>
                    </HighlightedList>
                </div>
            </component>
        </TabsList>
    </PageWrapper>
</template>

<script lang="ts" setup>
import { HighlightedList } from '@/widgets/HighlightedList';
import { PageWrapper } from '@/entities/PageWrapper';
import TabsList from '@/shared/ui/TabsList/TabsList.vue';


</script>

<style scoped></style>