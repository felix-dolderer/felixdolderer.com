<script setup lang="ts">
import type { NuxtError } from "#app";

const { locale, t } = useI18n();
const navLinks = useNavLinks();

const { error } = defineProps<{
  error: NuxtError;
}>();

useHead({
  htmlAttrs: {
    lang: locale,
  },
});

useSeoMeta({
  title: t("error.notFoundTitle"),
  description: t("error.notFoundDescription"),
});

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData(
    "navigation",
    () => {
      return queryCollectionNavigation("blog");
    },
    {
      transform: (data) => data.flat(),
    },
  ),
  useLazyAsyncData(
    "search",
    () => {
      return queryCollectionSearchSections("blog");
    },
    {
      server: false,
      transform: (data) => data.flat(),
    },
  ),
]);
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>

    <UToaster />
  </div>
</template>
